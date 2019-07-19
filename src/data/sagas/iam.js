import {
  put,
  call,
  all
} from 'redux-saga/effects';

import {
  fetchUsersService,
  fetchSelectedPermissionsService,
  fetchActionsService,
  savePermissionsService,
  fetchUserServicesService
} from 'data/services/iam';
import {
  fetchUserPermissionService
} from 'data/services/authentication'

import * as types from 'data/constants/types'

export function* fetchActionsSaga({ service }) {
  try {
    const actions = yield call(fetchActionsService, service)
    yield put({
      type: types.ACTIONS_FETCH_SUCCESS,
      service,
      actions
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersService)
    yield put({ type: types.USERS_FETCH_SUCCESS, users })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error'}})
  }
}

export function* fetchSelectedPermissionSaga(user) {
  try {
    const permissions = yield call(fetchSelectedPermissionsService, user)
    yield put({ type: types.FETCH_SELECTED_PERMISSIONS_SUCCESS, permissions })
  } catch(error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error'}})
  }
}

export function* savePermissionsSaga({requestBody}){
  try {
    yield call(savePermissionsService, requestBody)
    const [permissions, adminPermissions, services] = yield all([
      call (fetchSelectedPermissionsService, {user: requestBody.user}),
      call (fetchUserPermissionService),
      call (fetchUserServicesService)
    ]);
    yield all([
      put({ type: types.FETCH_SELECTED_PERMISSIONS_SUCCESS, permissions }),
      put({
        type: types.FETCH_USER_PERMISSIONS_SUCCESS,
        permissions: adminPermissions,
        services
      }),
      put({
        type: types.SAVE_ACTION,
        action: ''
      }),
      put({
        type: types.SAVE_SERVICE,
        service: ''
      })
    ])
  }
  catch(error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}
