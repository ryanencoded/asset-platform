import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

// Handles authentication related actions
export default function (state = initialState.site, action) {
  switch(action.type) {
    case types.SITES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.sites
      })
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'site'){
        return {
          ...state,
          actions: action.actions
        }
      }
    default: return state;
  }
}
