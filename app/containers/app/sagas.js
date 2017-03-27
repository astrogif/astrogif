import { clipboard } from 'electron';
import { select, takeEvery, put } from 'redux-saga/effects';
import APP from './constants';
import { copied, notCopied } from './actions';
import { add } from '../history/actions';
import config from '../../../config';

export function* copy(action) {
  const gif = yield select(state => state.gif);
  console.log(action.payload);
  const details = action.payload.url ? action.payload.url : gif.details.image_original_url;

  if (details) {
    const copyConfig = config.get('copy');

    if ((action.payload.meta && copyConfig === 'urlMarkdown') || copyConfig === 'markdown') {
      clipboard.writeText(`![](${details})`);
    } else {
      clipboard.writeText(details);
    }

    yield put(copied());
    if (!action.payload.url) {
      yield put(add(gif.currentQuery, gif.details));
    }
  } else {
    yield put(notCopied());
  }
}

export function* watchCopy() {
  yield takeEvery(APP.COPY, copy);
}
