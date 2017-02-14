import { watchRequestGif } from './containers/gif/sagas';
import { watchCopy } from './containers/app/sagas';
export default function* rootSaga() {
  yield [
    watchRequestGif(),
    watchCopy()
  ];
}
