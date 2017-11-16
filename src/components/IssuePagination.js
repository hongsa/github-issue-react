import React from 'react';
import PropTypes from 'prop-types';
import {PaginationItem, PaginationLink} from 'reactstrap';

const IssuePagination = ({currentPage, targetPage, pageRange, pageSize, onClickPageChange}) => {
  const pageNumber = (pageRange * pageSize) + targetPage;
  return (
    <PaginationItem
      active={currentPage === pageNumber}>
      <PaginationLink onClick={() => {onClickPageChange(pageNumber)}}>{pageNumber}</PaginationLink>
    </PaginationItem>
  )
};

IssuePagination.propTypes = {

};

export default IssuePagination