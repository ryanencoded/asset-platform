import { fork } from 'redux-saga/effects';
import {
  watchUserAuthentication,
  watchNotifications,
  watchUserUpdate,
  watchRegions,
  watchAlerts,
  watchAssets,
  watchMetrics,
  watchSites,
  watchIAM
} from 'data/sagas/watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchNotifications);
  yield fork(watchUserUpdate);
  yield fork(watchRegions);
  yield fork(watchAlerts);
  yield fork(watchAssets);
  yield fork(watchMetrics);
  yield fork(watchSites);
  yield fork(watchIAM);
}
