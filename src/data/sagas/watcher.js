import {
  take,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';
import * as types from 'data/constants/types';

import {
  verifyAccountSaga,
  confirmAccountSaga,
  signupSaga,
  loginSaga,
  logoutSaga,
  currentUserSaga,
  updateEmailSaga,
  verifyEmailSaga,
  confirmEmailSaga,
  updatePhoneSaga,
  verifyPhoneSaga,
  confirmPhoneSaga,
  changePasswordSaga,
  forgotPasswordSaga,
  resetPasswordSaga,
  updateNameSaga,
  fetchUserPermissionSaga
} from 'data/sagas/authentication';
import {
  notificationsAllowedSaga
} from 'data/sagas/notifications';

import {
  fetchRegionsSaga
} from 'data/sagas/regions';
import {
  fetchAssetsSaga,
  selectAssetSaga,
} from 'data/sagas/assets';
import {
  fetchSitesSaga
} from 'data/sagas/sites';
import {
  fetchAlertsSaga,
  clearAlertSaga
} from 'data/sagas/alerts';

import {
  fetchMetricsSaga,
  selectMetricSaga,
  fetchAllMetricsSaga
} from 'data/sagas/metrics';

import {
  fetchUsersSaga,
  fetchSelectedPermissionSaga,
  fetchActionsSaga,
  savePermissionsSaga
} from 'data/sagas/iam';


// Watches for watchUserAuthentication action type asynchronously
export function* watchUserAuthentication() {
  yield takeLatest(types.SIGNUP_USER, signupSaga);
  yield takeLatest(types.VERIFY_ACCOUNT, verifyAccountSaga);
  yield takeLatest(types.CONFIRM_ACCOUNT, confirmAccountSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
  yield takeLatest(types.CURRENT_USER, currentUserSaga);
  yield takeLatest(types.FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(types.RESET_PASSWORD, resetPasswordSaga);
  yield takeLatest(types.VERIFY_EMAIL, verifyEmailSaga);
  yield takeLatest(types.VERIFY_PHONE, verifyPhoneSaga);
  yield takeLatest(types.CONFIRM_EMAIL_VERIFICATION, confirmEmailSaga);
  yield takeLatest(types.CONFIRM_PHONE_VERIFICATION, confirmPhoneSaga);
  yield takeLatest(types.FETCH_USER_PERMISSIONS, fetchUserPermissionSaga);
}

//watches for notifications optin action type async
export function* watchNotifications() {
  yield takeLatest(types.NOTIFICATIONS_ALLOWED, notificationsAllowedSaga);
}

//watches for user update information
export function* watchUserUpdate() {
  yield takeLatest(types.UPDATE_EMAIL, updateEmailSaga);
  yield takeLatest(types.CHANGE_PASSWORD, changePasswordSaga);
  yield takeLatest(types.UPDATE_PHONE, updatePhoneSaga);
  yield takeLatest(types.UPDATE_NAME, updateNameSaga);
}

// Watches for regions action type asynchronously
export function* watchRegions() {
  yield takeLatest(types.REGIONS_FETCH, fetchRegionsSaga);
}

//watch to for alerts actions
export function* watchAlerts() {
  yield takeLatest(types.ALERTS_FETCH, fetchAlertsSaga);
  yield takeLatest(types.ALERT_CLEAR, clearAlertSaga);
}

//watch to for assets actions
export function* watchAssets() {
  yield takeLatest(types.ASSETS_FETCH, fetchAssetsSaga);
  yield takeLatest(types.ASSET_SELECT, selectAssetSaga);
}

//watch to for alerts actions
export function* watchSites() {
  yield takeLatest(types.SITES_FETCH, fetchSitesSaga);
}

export function* watchMetrics() {
  yield takeEvery(types.METRICS_FETCH, fetchMetricsSaga);
  yield takeEvery(types.METRIC_SELECT, selectMetricSaga);
  yield takeLatest(types.METRICS_FETCH_ALL, fetchAllMetricsSaga);
}

export function* watchIAM() {
  yield takeLatest(types.USERS_FETCH, fetchUsersSaga);
  yield takeLatest(types.FETCH_SELECTED_USER_PERMISSIONS, fetchSelectedPermissionSaga);
  yield takeLatest(types.SAVE_SERVICE, fetchActionsSaga);
  yield takeEvery(types.ACTIONS_FETCH, fetchActionsSaga);
  yield takeEvery(types.SAVE_PERMISSIONS, savePermissionsSaga);
}
