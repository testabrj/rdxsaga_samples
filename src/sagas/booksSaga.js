import {
    call,
    put,
    takeEvery,
} from 'redux-saga/effects'
import {
    getBooks
} from '../api/api.js'
import {requestBook,requestBookError,requestBookSuccess} from '../actions/bookActions';
import * as actionConstants from '../actions/actionConstants';


export function* fetchBooks() {
    
    try {
        yield put(requestBook());
        const booksObj = yield call(getBooks);
        let bookArr = [];
        for(let book in booksObj){
            bookArr.push(booksObj[book]);
        }
        yield put(requestBookSuccess(bookArr));
    } catch (e) {
        console.log("fetchBooks error");
        yield put(requestBookError(e.message));
    }
}

function* bookSaga() {
    console.log("Booksaga called");
    yield takeEvery(actionConstants.FETCHED_BOOK, fetchBooks);
}


export default bookSaga;