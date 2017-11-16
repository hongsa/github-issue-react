import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.issues, action) {
  switch (action.type) {
    case types.FETCH_ISSUES_SUCCESS:
      return {
        issues: action.issues,
        totalPage: action.totalPage ? action.totalPage : state.totalPage
      };
    case types.FETCH_ISSUES_FAILURE:
      return {
        issues: state.issues,
        page: action.page,
        fetchDataError: true,
      };
    default:
      return state;
  }
}