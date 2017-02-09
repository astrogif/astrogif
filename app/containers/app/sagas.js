import { clipboard } from 'electron';
import { select, takeEvery, put } from 'redux-saga/effects';
import APP from './constants';
import { copied, notCopied } from './actions';
import config from '../../../config';

export function* copy(action) {
  const gif = yield select(state => state.gif);

  if (gif.details) {
    const copyConfig = config.get('copy');

    if ((action.payload && copyConfig === 'urlMarkdown') || copyConfig === 'markdown') {
      clipboard.writeText(`![](${gif.details.image_original_url})`);
    } else {
      clipboard.writeText(gif.details.image_original_url);
    }
    yield put(copied());
  } else {
    yield put(notCopied());
  }
}

export function* watchCopy() {
  yield takeEvery(APP.COPY, copy);
}
