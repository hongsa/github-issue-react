import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.issueDetail, action) {
  switch (action.type) {
    case types.FETCH_ISSUE_DETAIL_SUCCESS:
      return {
        issue: action.issue,
        comments: []
      };
    case types.FETCH_ISSUE_DETAIL_FAILURE:
      return {
        issue: state.issue,
        comments: state.comments,
        fetchDataError: true,
      };
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        issue: state.issue,
        comments: action.comments,
      };
    case types.FETCH_COMMENTS_FAILURE:
      return {
        issue: state.issue,
        comments: state.comments,
        fetchDataError: true,
      };
    default:
      return state;
  }
}