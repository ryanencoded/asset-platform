import { put, call, all } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { fetchMetricsService, fetchAllMetricsService } from 'data/services/metrics'


function* fetchMetricsSaga({ asset }) {
  try {
    const metrics = yield call(fetchMetricsService, asset)
    yield put({ type: types.METRICS_FETCH_SUCCESS, metrics, asset })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

function* selectMetricSaga({ metric }) {
  try {
    yield put({ type: types.METRIC_SELECT_SUCCESS, metric })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

function* fetchAllMetricsSaga() {
  try {
    const metrics = yield call(fetchAllMetricsService)
    yield put({ type: types.METRICS_FETCH_ALL_SUCCESS, metrics })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

export {
  fetchMetricsSaga,
  selectMetricSaga,
  fetchAllMetricsSaga
}
