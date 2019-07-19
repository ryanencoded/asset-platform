import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

// Handles authentication related actions
export default function (state = initialState.metric, action) {
  switch(action.type) {
    case types.METRICS_FETCH_SUCCESS:
      return {
        ...state,
        [action.asset]: action.metrics
      }
    case types.METRIC_SELECT_SUCCESS:
      return {
        ...state,
        current: action.metric
      }
    case types.METRICS_FETCH_ALL_SUCCESS:
      return {
        ...state,
        data: action.metrics
      }
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'metric'){
        return {
          ...state,
          actions: action.actions
        }
      }
    default: return state;
  }
}
