import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const IssueCardItem = ({title, number}) => {
  return (
  <Link to={`/issue/${number}`}>
    <ListGroupItem>{title}</ListGroupItem>
  </Link>
  )
};

IssueCardItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IssueCardItem