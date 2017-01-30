import { call, put, takeLatest } from 'redux-saga/effects';
import GIF from './constants';
import { result, error } from './actions';
import request from '../../utils/request';

export function* requestGif(action) {
  const requestURL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${action.payload}`;

  try {
    const gif = yield call(request, requestURL);
    yield put(result(gif));
  } catch (err) {
    yield put(error(err));
  }
}

export function* watchRequestGif() {
  yield takeLatest(GIF.REQUEST, requestGif);
}
