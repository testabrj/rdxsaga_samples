import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    getBooks
} from '../api/api.js'
import {fetchBook,requestBook,requestBookError,requestBookSuccess} from '../actions/bookActions';
import * as actionConstants from '../actions/actionConstants';


export function* fetchBooks() {
    console.log("fetchBooks called");
    try {
        console.log("fetchBooks called");
        yield put(requestBook());
        const books = yield call(getBooks);
        console.log("Books",books);
        yield put(requestBookSuccess(books));
    } catch (e) {
        console.log("fetchBooks error");
        yield put(requestBookError(e.message));
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* bookSaga() {
    console.log("Booksaga called");
    yield takeLatest(actionConstants.FETCHED_BOOK, fetchBooks);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchBooks);
// }

export default bookSaga;