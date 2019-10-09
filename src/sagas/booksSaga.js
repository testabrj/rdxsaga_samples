import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    getBooks
} from '../api/api.js'

function* fetchBooks(action) {
    try {
        const books = yield call(getBooks);
        yield put({
            type: "BOOKS_FETCH_SUCCEEDED",
            books: books
        });
    } catch (e) {
        yield put({
            type: "BOOKS_FETCH_FAILED",
            message: e.message
        });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* bookSaga() {
    yield takeEvery("BOOK_FETCH_REQUESTED", fetchBooks);
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