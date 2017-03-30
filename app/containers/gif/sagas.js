import { remote } from 'electron';
import { call, select, put, takeLatest } from 'redux-saga/effects';
import GIF from './constants';
import { result, error, clear } from './actions';
import request from '../../utils/request';
import config from '../../../config';

export function* requestGif(action) {
  // If there is no query given, grab the latest one from state
  const tag = action.payload
    ? action.payload
    : yield select(state => state.gif.currentQuery);

  const rating = config.get('rating');
  const requestURL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}&rating=${rating}`;

  try {
    const gif = yield call(request, requestURL);
    const state = yield select();

    // Only continue displaying this result if the window is visible to the user
    // and they haven't blanked out the search box
    if (remote.getCurrentWindow().isVisible() && state.gif.currentQuery.length) {
      yield put(result(gif));
    } else {
      yield put(clear());
    }
  } catch (err) {
    yield put(error(err));
  }
}

export function* watchRequestGif() {
  yield takeLatest([GIF.REQUEST, GIF.NEXT], requestGif);
}
