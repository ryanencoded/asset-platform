import * as types from 'data/constants/types'

export function fetchUsers()  {
  return {
    type: types.USERS_FETCH
  }
}

export function selectIAMUser(user) {
  return {
    type: types.SELECT_IAM_USER,
    user
  }
}

export function fetchSelectedPermissions(user) {
  return {
    type: types.FETCH_SELECTED_USER_PERMISSIONS,
    user
  }
}

export function saveService(service) {
  return {
    type: types.SAVE_SERVICE,
    service
  }
}

export function saveAction(action) {
  return {
    type: types.SAVE_ACTION,
    action
  }
}

export function fetchActions(service) {
  return {
    type: types.ACTIONS_FETCH,
    service
  }
}

export function savePermissions(requestBody) {
  return {
    type: types.SAVE_PERMISSIONS,
    requestBody
  }
}
