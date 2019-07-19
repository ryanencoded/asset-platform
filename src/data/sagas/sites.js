import { put, call } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { fetchSites } from 'data/services/sites'

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* fetchSitesSaga({ payload }) {
  try {
    const sites = yield call(fetchSites, payload);
    yield put({ type: types.SITES_FETCH_SUCCESS, sites })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}
