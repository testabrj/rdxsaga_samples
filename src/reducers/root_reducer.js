import { combineReducers } from "redux";
import booksReducer from "./books_reducer";

const rootReducer = combineReducers({
    booksReducer:booksReducer
});

export default rootReducer;