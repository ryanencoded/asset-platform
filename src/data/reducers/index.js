import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
/* Reducers */
import authentication from 'data/reducers/authentication'
import notifications from 'data/reducers/notifications'
import assets from 'data/reducers/assets'
import metrics from 'data/reducers/metrics'
import regions from 'data/reducers/regions'
import sites from 'data/reducers/sites'
import alerts from 'data/reducers/alerts'
import utils from 'data/reducers/utils'
import iam from 'data/reducers/iam'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user', 'utils', 'alert', 'region', 'asset', 'site', 'metric', 'iam', 'notification']
}

const userPersistConfig = {
  key: 'user',
  storage: storage
}

const notificationsPersistConfig = {
  key: 'notification',
  storage: storage
}

const utilsPersistConfig = {
  key: 'util',
  storage: storage
}

const alertsPersistConfig = {
  key: 'alert',
  storage: storage
}

const regionsPersistConfig = {
  key: 'region',
  storage: storage
}

const assetsPersistConfig = {
  key: 'asset',
  storage: storage
}

const metricsPersistConfig = {
  key: 'metric',
  storage: storage
}

const sitesPersistConfig = {
  key: 'site',
  storage: storage
}

const iamPersistConfig = {
  key: 'iam',
  storage: storage
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, authentication),
  notification: persistReducer(notificationsPersistConfig, notifications),
  asset: persistReducer(assetsPersistConfig, assets),
  metric: persistReducer(metricsPersistConfig, metrics),
  region: persistReducer(regionsPersistConfig, regions),
  site: persistReducer(sitesPersistConfig, sites),
  alert: persistReducer(alertsPersistConfig, alerts),
  util: persistReducer(utilsPersistConfig, utils),
  iam: persistReducer(iamPersistConfig, iam)
})

export default persistReducer(rootPersistConfig, rootReducer)
