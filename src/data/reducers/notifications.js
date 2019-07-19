import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

export default function(state = initialState.notification, action) {
  switch (action.type) {
    case types.NOTIFICATIONS_ALLOWED_SUCCESS:
      return {
        ...state,
        optedIn: action.status
      }
    default:
      return state;
  }
}
