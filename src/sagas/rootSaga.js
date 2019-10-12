import {
    all,fork
} from 'redux-saga/effects'
import bookSaga from '../sagas/booksSaga'
export default function* rootSaga() {
    yield all([
        bookSaga()
    ]);
}