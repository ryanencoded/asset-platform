import * as types from 'data/constants/types';

export function notificationsAllowed(status = true) {
  return {
    type: types.NOTIFICATIONS_ALLOWED,
    status
  }
}
