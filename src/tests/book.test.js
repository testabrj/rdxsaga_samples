import { put, call } from 'redux-saga/effects'
import bookSaga from '../sagas/booksSaga'
import fetchBooks from '../sagas/booksSaga';
import * as actionConstants from '../actions/actionConstants';


it('renders without crashing', () => {
const iterator = fetchBooks();
const receivedValue = iterator.next().value.payload.args[0];
expect((receivedValue)).toEqual((actionConstants.FETCHED_BOOK));

});

