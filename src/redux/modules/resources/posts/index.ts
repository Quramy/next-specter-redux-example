import { steps } from "redux-effects-steps";
import { actionCreatorFactory } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { specterRead } from "@specter/redux-effects-specter";
import { PostSummary } from "../../../../models/post";

const actionCreator = actionCreatorFactory("posts resources");

export const startFetch = actionCreator("start fetch");
export const successFetch = actionCreator<{ items: readonly PostSummary[] }>(
  "success fetch"
);
export const failureFetch = actionCreator("failure fetch");

export const fetchPosts = () =>
  steps(startFetch(), specterRead("posts"), [successFetch, failureFetch]);

type State = {
  isLoading: boolean;
  data: readonly PostSummary[];
};

const initialState: State = {
  isLoading: false,
  data: []
};

export const reducer = reducerWithInitialState(initialState)
  .case(startFetch, s => ({
    ...s,
    isLoading: true
  }))
  .case(successFetch, (s, p) => ({
    ...s,
    isLoading: false,
    data: p.items
  }))
  .case(failureFetch, s => ({
    ...s,
    isLoading: false
  }))
  .default(s => s);
