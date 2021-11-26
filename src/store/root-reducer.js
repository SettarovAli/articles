import { combineReducers } from "redux";
import articles from "./articlesSlice";

export const rootReducer = combineReducers({
  articles,
});
