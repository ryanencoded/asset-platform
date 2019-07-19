import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

// Handles authentication related actions
export default function (state = initialState.region, action) {
  switch(action.type) {
    case types.REGIONS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.regions
      })
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'region'){
        return {
          ...state,
          actions: action.actions
        }
      }
    default: return state;
  }
}
