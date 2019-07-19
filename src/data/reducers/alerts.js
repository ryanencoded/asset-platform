import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

// Handles authentication related actions
export default function (state = initialState.alert, action) {
  switch(action.type) {
    case types.ALERTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.alerts
      }
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'alert'){
        return {
          ...state,
          actions: action.actions
        }
      }
    case types.SELECTED_SORT:
      if (action.service == 'alert') {
        return {
          ...state,
          sort: action.option
        }
      }
    case types.SELECTED_FILTER:
      if (action.service == 'alert') {
        return {
          ...state,
          filter: action.option
        }
      }
    default: return state;
  }
}
