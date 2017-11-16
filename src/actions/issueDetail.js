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

export function fetchCommentsSuccess(res) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    comments: res.data,
  };
}

export function fetchCommentsFailure() {
  return {
    type: types.FETCH_COMMENTS_FAILURE
  };
}

export function fetchComments(number) {
  return function (dispatch) {
    return axios.get(`${api.BACKEND_URL}/${number}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res))
      })
      .catch(() => {
        dispatch(fetchCommentsFailure());
      });
  };
}