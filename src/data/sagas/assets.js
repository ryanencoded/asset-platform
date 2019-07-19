import { put, call, all } from 'redux-saga/effects';
import * as types from 'data/constants/types';
import { fetchAssets, fetchAssetService } from 'data/services/assets'

function* fetchAssetsSaga({ payload }) {
  try {
    const assets = yield call(fetchAssets, payload)
    yield put({ type: types.ASSETS_FETCH_SUCCESS, assets })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

function* selectAssetSaga({ asset }) {
  try {
    // const current = yield call(fetchAssetService, asset);
    yield put({ type: types.ASSET_SELECT_SUCCESS, asset })
  } catch (error) {
    yield put({ type: types.SHOW_MESSAGE, message: { text: error.message, type: 'error' }})
  }
}

export {
  fetchAssetsSaga,
  selectAssetSaga
}
