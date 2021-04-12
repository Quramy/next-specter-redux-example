import { combineReducers } from "redux";
import { reducer as resources } from "./resources";

export const reducer = combineReducers({
  resources,
});

export type RootState = ReturnType<typeof reducer>;
