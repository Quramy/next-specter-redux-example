import { steps } from "redux-effects-steps";
import { actionCreatorFactory } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { specterRead } from "@specter/redux-effects-specter";
import { PostDetail } from "../../../../models/post";

const actionCreator = actionCreatorFactory("post detail resource");

export const startFetch = actionCreator("start fetch");
export const successFetch = actionCreator<PostDetail>(
  "success fetch"
);
export const failureFetch = actionCreator("failure fetch");

export const fetchPostDetail = (id: string) =>
  steps(startFetch(), specterRead("post", { query: { id } }), [successFetch, failureFetch]);

type State = {
  isLoading: boolean;
  data: PostDetail | null;
};

const initialState: State = {
  isLoading: false,
  data: null
};

export const reducer = reducerWithInitialState(initialState)
  .case(startFetch, s => ({
    ...s,
    isLoading: true
  }))
  .case(successFetch, (s, data) => ({
    ...s,
    isLoading: false,
    data,
  }))
  .case(failureFetch, s => ({
    ...s,
    isLoading: false
  }))
  .default(s => s);
