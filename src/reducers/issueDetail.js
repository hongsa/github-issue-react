import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.issueDetail, action) {
  switch (action.type) {
    case types.FETCH_ISSUE_DETAIL_SUCCESS:
      return {
        issue: action.issue,
        comments: [],
        commentsTotalPage: 0
      };
    case types.FETCH_ISSUE_DETAIL_FAILURE:
      return {
        issue: state.issue,
        comments: state.comments,
        commentsTotalPage: state.commentsTotalPage,
        fetchDataError: true,
      };
    case types.FETCH_COMMENTS_FIRST_SUCCESS:
      return {
        issue: state.issue,
        comments: action.comments,
        commentsTotalPage: action.commentsTotalPage ? action.commentsTotalPage : state.commentsTotalPage
      };
    case types.FETCH_COMMENTS_CONTINUE_SUCCESS:
      return {
        issue: state.issue,
        comments: state.comments.concat(action.comments),
        commentsTotalPage: state.commentsTotalPage,
      };
    case types.FETCH_COMMENTS_LAST_SUCCESS:
      return {
        issue: state.issue,
        comments: state.comments,
        commentsTotalPage: state.commentsTotalPage,
        commentLast: true
      };
    case types.FETCH_COMMENTS_FAILURE:
      return {
        issue: state.issue,
        comments: state.comments,
        commentsTotalPage: state.commentsTotalPage,
        commentsFetchDataError: true,
        page: action.page
      };
    default:
      return state;
  }
}