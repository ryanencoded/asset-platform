import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

// Handles authentication related actions
export default function (state = initialState.asset, action) {
  switch(action.type) {
    case types.ASSETS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.assets
      }
    case types.ASSET_SELECT_SUCCESS:
      return {
        ...state,
        current: state.data.find(x => x.artifact == action.asset)
      }
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'asset'){
        return {
          ...state,
          actions: action.actions
        }
      }
    case types.SELECTED_SORT:
      if (action.service == 'asset') {
        return {
          ...state,
          sort: action.option
        }
      }
    case types.SELECTED_FILTER:
      if (action.service == 'asset') {
        return {
          ...state,
          filter: action.option
        }
      }
    default: return state;
  }
}
