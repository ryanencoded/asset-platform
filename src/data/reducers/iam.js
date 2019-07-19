import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';

export default function(state = initialState.iam, action) {
  switch (action.type) {
    case types.ACTIONS_FETCH_SUCCESS:
      if(action.service == 'iam:permission'){
        const permission = {
          ...state.permission,
          actions: action.actions
        }
        return {
          ...state,
          permission
        }
      }
      if(action.service == 'iam:user'){
        const user = {
          ...state.user,
          actions: action.actions
        }
        return {
          ...state,
          user
        }
      }
    case types.SAVE_ACTION:
      const actions = {
        ...state.actions,
        current: action.action
      }
      return { ...state, actions }

    case types.USERS_FETCH_SUCCESS:
      const users = {
        ...state.user,
        data: action.users
      }
      return {
        ...state,
        user: users
      }
    case types.SELECT_IAM_USER:
      const user = {
        ...state.user,
        current: action.user
      }
      return {
        ...state,
        user
      }
    case types.FETCH_SELECTED_PERMISSIONS_SUCCESS:
      const permissions = {
        ...state.permission,
        user: action.permissions
      }
      return{
        ...state,
        permission: permissions
      }
    case types.SAVE_SERVICE:
      const service = {
        ...state.services,
        current: action.service
      }
      return {
        ...state,
        services: service
        }
    case types.FETCH_USER_PERMISSIONS_SUCCESS:
      const admin = {
        ...state.permission,
        admin: action.permissions
      }
      const services = {
        ...state.services,
        data: action.services
      }
      return {
        ...state,
        permission: admin,
        services,
      }
    default:
      return state
  }
}
