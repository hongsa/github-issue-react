import axios from 'axios';
import * as types from './actionTypes';
import * as api from '../lib/api';

function getTotalPage(link) {
  if (link.includes('rel="last"')) {
    return link.split(',')[1].match(/page=(\d+).*$/)[1]
  } else {
    return false
  }
}

export function fetchIssuesSuccess(res) {
  return {
    type: types.FETCH_ISSUES_SUCCESS,
    issues: res.data,
    totalPage: getTotalPage(res.headers.link)
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