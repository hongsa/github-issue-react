import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const IssueCardItem = ({title}) => {
  return (
    <ListGroupItem>{title}</ListGroupItem>
  )
};

IssueCardItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IssueCardItem