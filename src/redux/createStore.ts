import {
  createStore as createReduxStore,
  applyMiddleware,
  AnyAction,
  compose
} from "redux";
import Client from "@specter/client";
import specterMiddleware from "@specter/redux-effects-specter";
import stepsMiddleware from "redux-effects-steps";
import { reducer, RootState } from "./modules";
import { isServer } from "../utililty-functions/isServer";

let _store: ReturnType<typeof createStore> | undefined = undefined;

type PartialState = {
  resources?: {
    [P in keyof RootState["resources"]]?: RootState["resources"][P];
  };
};

const wrapped = (state: RootState, action: AnyAction) => {
  if (action.type === "__MERGE_PARTIAL_STATE__") {
    const s: RootState = {
      ...state,
      resources: {
        ...state.resources,
        ...action.payload.resources,
      },
    };
    return s;
  }
  return reducer(state, action);
}

export function createStore(loadedState: PartialState = {}) {
  const baseState = createReduxStore(reducer).getState();
  const preloadedState: RootState = { ...baseState, resources: {
    ...baseState.resources,
    ...loadedState.resources,
  } };
  const client = new Client({
    base: "/xhr"
  });
  const composeEnhancers: typeof compose = !isServer()
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
  const store = createReduxStore(
    wrapped as any,
    preloadedState,
    composeEnhancers(
      applyMiddleware(stepsMiddleware, specterMiddleware(client))
    )
  );

  return store;
}

export function createServerSideStore() {
  const client = new Client({
    base: "/xhr"
  });
  const store = createReduxStore(
    reducer,
    applyMiddleware(stepsMiddleware, specterMiddleware(client))
  );

  return store;
}

export function getStore(loadedState: PartialState = {}): ReturnType<typeof createStore> {
  if (_store) {
    _store.dispatch({ type: "__MERGE_PARTIAL_STATE__", payload: loadedState });
    return _store;
  }

  const store = createStore(loadedState);
  if (!isServer()) {
    _store = store;
    return _store as any;
  }
  return store;
}
