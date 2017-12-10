import axios from "axios";

import * as types from "./actionTypes";
import * as api from "../lib/api";
import * as common from "./common";

export function selectIssueFilterSuccess(selectedFilter) {
  return {
    type: types.SELECT_ISSUE_FILTER_SUCCESS,
    filters: selectedFilter
  };
}

export function selectIssueFilterFailure() {
  return {
    type: types.SELECT_ISSUE_FILTER_FAILURE
  };
}

export function fetchIssuesSuccess(res) {
  return {
    type: types.FETCH_ISSUES_SUCCESS,
    issues: res.data,
    totalPage: common.getTotalPage(res.headers)
  };
}

export function fetchIssuesFailure(page) {
  return {
    type: types.FETCH_ISSUES_FAILURE,
    page: page
  };
}

export function fetchIssues(selectedFilter) {
  return function(dispatch) {
    return axios
      .get(
        `${api.BACKEND_URL}?state=${selectedFilter.state}` +
          `&sort=${selectedFilter.sort}&direction=${selectedFilter.direction}` +
          `&page=${selectedFilter.page}&per_page=${api.PER_PAGE}`
      )
      .then(res => {
        dispatch(fetchIssuesSuccess(res));
        dispatch(selectIssueFilterSuccess(selectedFilter));
      })
      .catch(() => {
        dispatch(fetchIssuesFailure(selectedFilter.page));
        dispatch(selectIssueFilterFailure());
      });
  };
}
