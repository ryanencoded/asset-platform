import * as types from 'data/constants/types';

export function fetchAlerts(){
  return {
    type: types.ALERTS_FETCH
  }
}

export function clearAlert(alert) {
  return {
    type: types.ALERT_CLEAR,
    alert
  }
}
