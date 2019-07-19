import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

export default function (state = initialState.users, action) {
  switch(action.type) {
    case types.USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    case types.SELECT_IAM_USER:
      return {
        ...state,
        currentUser: action.user
      }
    case types.FETCH_SELECTED_PERMISSIONS_SUCCESS:
      return {
        ...state,
        permissions: action.permissions
      }
    case types.SAVE_SERVICE:
      return Object.assign({}, state,
        {services: Object.assign({}, state.services, {current: action.service})}
      )
    case types.FETCH_USER_PERMISSIONS_SUCCESS:
      return Object.assign({}, state,
        {permissions: action.permissions},
        {services: Object.assign({}, state.services, {data: action.services})}
      )
    default: return state;
  }
}
