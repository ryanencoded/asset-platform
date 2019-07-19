import initialState from 'data/store/initialState';
import * as types from 'data/constants/types';
import { createSelector } from 'reselect'
import { sortData, filterData } from 'utils/Functions/sort'

// Handles authentication related actions
export default function (state = initialState.util, action) {
  switch (action.type){
    case types.SHOW_MESSAGE:
      return Object.assign({}, state, {
        message: {
          text: (action.message.text ? action.message.text: ''),
          type: (action.message.type ? action.message.type : 'info'),
          visible: (action.message.text && action.message.text.length > 0 ? true : false)
        }
      })
    case types.SHOW_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
    case types.TOGGLE_VIEW:
      return Object.assign({}, state, {
        list: action.list
      })
    default: return state;
  }
}

//Selectors for sort and filter
const sortOption = (state, service) => state[service].sort
const filterOption = (state, service) =>  state[service].filter
const data = (state, service) => state[service].data

export const sortDataSelector = createSelector(
  sortOption, data,
  (option, list) => {
    return sortData(list, option)
  }
)

export const filterDataSelector = createSelector(
  filterOption, data,
  (option, list) => {
    return filterData(list, option)
  }
)

export const filtSortSelector = createSelector(
  filterDataSelector, sortOption,
  (list, option) => {
    return sortData(list, option)
  }
)
