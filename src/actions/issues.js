import axios from 'axios';
import * as types from './actionTypes';
import * as api from '../lib/api';

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

export function fetchIssuesSuccess(res) {
  return {
    type: types.FETCH_ISSUES_SUCCESS,
    issues: res.data,
    totalPage: getTotalPage(res.headers)
  };
}

export function fetchIssuesFailure(page) {
  return {
    type: types.FETCH_ISSUES_FAILURE,
    page: page
  };
}

export function fetchIssues(state, sort, direction, page) {
  return function (dispatch) {
    return axios.get(`${api.BACKEND_URL}?state=${state}&sort=${sort}&direction=${direction}&page=${page}&per_page=${api.PER_PAGE}`)
      .then(res => {
        dispatch(fetchIssuesSuccess(res))
      })
      .catch(() => {
        dispatch(fetchIssuesFailure(page));
      });
  };
}