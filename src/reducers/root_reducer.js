import {
    combineReducers
} from "redux";
import booksreducer from "./booksreducer";

const rootReducer = combineReducers({
    bookState: booksreducer
});

export default rootReducer;