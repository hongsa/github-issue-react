import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function(state = initialState.issues, action) {
  switch (action.type) {
    case types.FETCH_ISSUES_SUCCESS:
      return {
        issues: action.issues,
        totalPage: action.totalPage ? action.totalPage : state.totalPage,
        filters: state.filters
      };
    case types.FETCH_ISSUES_FAILURE:
      return {
        issues: state.issues,
        page: action.page,
        filters: state.filters,
        fetchDataError: true
      };
    case types.SELECT_ISSUE_FILTER_SUCCESS:
      return {
        issues: state.issues,
        totalPage: state.totalPage,
        filters: action.filters
      };
    case types.SELECT_ISSUE_FILTER_FAILURE:
      return {
        issues: state.issues,
        totalPage: state.totalPage,
        filters: state.filters
      };
    default:
      return state;
  }
}
