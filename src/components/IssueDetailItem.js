import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const IssueDetailItem = ({data}) => {
  const { title, body } = data;
  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
    </div>
  )
};

IssueDetailItem.propTypes = {
};

export default IssueDetailItem