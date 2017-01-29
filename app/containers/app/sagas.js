// import { clipboard } from 'electron';
import { select, takeEvery, put } from 'redux-saga/effects';
import APP from './constants';
import { copied, notCopied } from './actions';

export function* copy() {
  const gif = yield select(state => state.gif);
  if (gif.details) {
    // clipboard.writeText(state.gif.details.image_original_url);
    yield put(copied());
  } else {
    yield put(notCopied());
  }
}

export function* watchCopy() {
  yield takeEvery(APP.COPY, copy);
}
