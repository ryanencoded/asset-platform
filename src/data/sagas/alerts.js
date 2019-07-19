import { put, call } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { fetchAlertsService, clearAlertService } from 'data/services/alerts';

export function* fetchAlertsSaga() {
  try {
    const alerts = yield call(fetchAlertsService);
    yield put({ type: types.ALERTS_FETCH_SUCCESS, alerts });
  } catch(error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

export function* clearAlertSaga({ alert }) {
  try {
    yield call(clearAlertService, alert)
    const alerts = yield call(fetchAlertsService);
    yield put({ type: types.ALERTS_FETCH_SUCCESS, alerts });
  } catch(error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}
