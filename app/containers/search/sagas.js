import { takeEvery } from 'redux-saga/effects';
import SEARCH from './constants';
import { copy } from '../app/sagas';

export function* watchCopy() {
  yield takeEvery(SEARCH.COPY, copy);
}
