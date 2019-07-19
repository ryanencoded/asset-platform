import { put, call } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { fetchRegions } from 'data/services/regions'

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* fetchRegionsSaga({ payload }) {
  try {
    const regions = yield call(fetchRegions, payload);

    yield put({ type: types.REGIONS_FETCH_SUCCESS, regions })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}
