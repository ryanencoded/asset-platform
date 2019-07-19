import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

export default function(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, initialState.user)
    case types.CURRENT_USER_FAILED:
      return Object.assign({}, state, initialState.user)
    case types.CURRENT_USER_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.VERIFY_EMAIL_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.CONFIRM_EMAIL_VERIFICATION_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.VERIFY_PHONE_SUCCESS:
      return Object.assign({}, state, action.user)
    case types.CONFIRM_PHONE_VERIFICATION_SUCCESS:
      return Object.assign({}, state, action.user)
    default:
      return state;
  }
}
