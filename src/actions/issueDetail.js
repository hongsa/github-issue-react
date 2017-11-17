import axios from 'axios';
import * as types from './actionTypes';
import * as api from '../lib/api';


export function fetchIssueDetailSuccess(res) {
  return {
    type: types.FETCH_ISSUE_DETAIL_SUCCESS,
    issue: res.data,
  };
}

export function fetchIssueDetailFailure() {
  return {
    type: types.FETCH_ISSUE_DETAIL_FAILURE
  };
}

export function fetchIssueDetail(number) {
  return function (dispatch) {
    return axios.get(`${api.BACKEND_URL}/${number}`)
      .then(res => {
        dispatch(fetchIssueDetailSuccess(res))
      })
      .catch(() => {
        dispatch(fetchIssueDetailFailure());
      });
  };
}

function getTotalPage(headers) {
  if(headers.hasOwnProperty('link')) {
    if (headers.link.includes('rel="last"')) {
      return parseInt(headers.link.split(',')[1].match(/page=(\d+).*$/)[1], 10)
    } else {
      return false
    }
  } else {
    return false
  }
}

export function fetchCommentsFirstSuccess(res) {
  return {
    type: types.FETCH_COMMENTS_FIRST_SUCCESS,
    comments: res.data,
    commentsTotalPage: getTotalPage(res.headers)
  };
}

export function fetchCommentsContinueSuccess(res) {
  return {
    type: types.FETCH_COMMENTS_CONTINUE_SUCCESS,
    comments: res.data,
  };
}

export function fetchCommentsLastSuccess() {
  return {
    type: types.FETCH_COMMENTS_LAST_SUCCESS
  };
}

export function fetchCommentsFailure(page) {
  return {
    type: types.FETCH_COMMENTS_FAILURE,
    page: page
  };
}

export function fetchComments(number, page) {
  return function (dispatch) {
    return axios.get(`${api.BACKEND_URL}/${number}/comments?page=${page}`)
      .then(res => {
        if (page === 1) {
          dispatch(fetchCommentsFirstSuccess(res))
        } else {
          if (res.data.length !== 0) {
            dispatch(fetchCommentsContinueSuccess(res));
          } else {
            dispatch(fetchCommentsLastSuccess());
          }
        }
      })
      .catch(() => {
        dispatch(fetchCommentsFailure(page));
      });
  };
}