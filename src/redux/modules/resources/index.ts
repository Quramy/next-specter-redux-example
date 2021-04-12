import { combineReducers } from "redux";

import { reducer as posts } from "./posts";
import { reducer as postDetail } from "./postDetail";

export const reducer = combineReducers({
  posts,
  postDetail,
});
