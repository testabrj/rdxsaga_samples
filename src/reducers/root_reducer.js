import { combineReducers } from "redux";
import booksReducer from "./booksreducer";

const rootReducer = combineReducers({
    bookState: booksReducer
});

export default rootReducer;