import { put, call } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { notificationsAllowedService } from 'data/services/notifications';


export function* notificationsAllowedSaga(payload) {
  try {
    const status = yield call(notificationsAllowedService, payload)
    yield put({ type: types.NOTIFICATIONS_ALLOWED_SUCCESS, status})
  } catch(err) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: err.mesage, type: 'error' }})
  }
}
