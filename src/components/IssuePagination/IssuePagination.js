import React from 'react';
import PropTypes from 'prop-types';
import {PaginationItem, PaginationLink} from 'reactstrap';

const IssuePagination = ({currentPage, targetPage, pageRange, pageSize, onClickChangePage}) => {
  const pageNumber = (pageRange * pageSize) + targetPage;
  return (
    <PaginationItem
      active={currentPage === pageNumber}>
      <PaginationLink onClick={() => {onClickChangePage(pageNumber)}}>{pageNumber}</PaginationLink>
    </PaginationItem>
  )
};

IssuePagination.propTypes = {
  currentPage: PropTypes.number,
  targetPage: PropTypes.number,
  pageRange: PropTypes.number,
  pageSize: PropTypes.number,
  onClickChangePage: PropTypes.func,
};

export default IssuePagination