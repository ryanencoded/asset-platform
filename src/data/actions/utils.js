import * as types from 'data/constants/types';

export function showMessage(message){
  return {
    type: types.SHOW_MESSAGE,
    message
  }
}

export function showLoading(loading = false) {
  return {
    type: types.SHOW_LOADING,
    loading: loading
  }
}

export function toggleView(list = false) {
  return {
    type: types.TOGGLE_VIEW,
    list: list
  }
}

export function saveSortBy(service, option) {
  console.log(option)
  return {
    type: types.SELECTED_SORT,
    service,
    option
  }
}

export function saveFilterBy(service, option) {
  return {
    type: types.SELECTED_FILTER,
    service,
    option
  }
}
