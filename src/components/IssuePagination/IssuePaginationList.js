import React from 'react';
import PropTypes from 'prop-types';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import IssuePagination from './IssuePagination';

class IssuePaginationList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
    const {currentPage, pageRange, pageSize, onClickPageChange, onClickPageRangeChange, totalPage} = this.props;
    const numberArray = [...Array(10).keys()].map(i => i + 1);
    const mapToComponents = () => {
      return numberArray.map((targetPage) => {
        const pageNumber = (pageRange * pageSize) + targetPage;
        if (totalPage < pageNumber) {
          return false
        } else {
          return (
            <IssuePagination
              key={targetPage}
              currentPage={currentPage}
              targetPage={targetPage}
              pageRange={pageRange}
              pageSize={pageSize}
              onClickPageChange={onClickPageChange}
            />
          )
        }
      });
    };

    return (
      <Pagination>
        <PaginationItem disabled={pageRange === 0}>
          <PaginationLink
            previous
            onClick={() => onClickPageRangeChange('prev')}>
          </PaginationLink>
        </PaginationItem>
        {mapToComponents()}
        <PaginationItem
          disabled={(pageRange + 1) * pageSize >= totalPage}>
          <PaginationLink
            next
            onClick={() => onClickPageRangeChange('next')}>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}

IssuePaginationList.propTypes = {
  currentPage: PropTypes.number,
  pageRange: PropTypes.number,
  pageSize: PropTypes.number,
  totalPage: PropTypes.number,
  onClickPageChange: PropTypes.func,
  onClickPageRangeChange: PropTypes.func
};

export default IssuePaginationList