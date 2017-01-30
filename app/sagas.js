import { watchRequestGif } from './containers/gif/sagas';
import { watchCopy as watchAppCopy } from './containers/app/sagas';
import { watchCopy as watchSearchCopy } from './containers/search/sagas';
export default function* rootSaga() {
  yield [
    watchRequestGif(),
    watchAppCopy(),
    watchSearchCopy()
  ];
}
