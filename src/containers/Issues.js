import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Row} from 'reactstrap';

import * as issuesActions from '../actions/issues';
import {IssueCardList, IssuePaginationList, Spinner} from '../components';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      state: this.props.issues.filters.state,
      sort: this.props.issues.filters.sort,
      direction: this.props.issues.filters.direction,
      page: this.props.issues.filters.page,
      pageRange: this.props.issues.filters.pageRange,
      pageSize: 10
    };
  }

  componentDidMount() {
    this.fetchIssues().then(() => {
      this.setState({loading: false});
    })
  }

  componentWillReceiveProps(nextProps) {

    // 페이지 에러 시 해당 page 다시 호출
    if (nextProps.issues.fetchDataError) {
      this.setState({
        page: nextProps.issues.page,
        loading: true
      }, () => {
        this.fetchIssues().then(() => {
          this.setState({loading: false});
        })
      });
    }
  }

  onClickChangePage = (page) => {
    this.setState({
      page: page,
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  onClickChangePageRange = (name) => {
    const prevPageNumber = ((this.state.pageRange) * this.state.pageSize);
    const nextPageNumber = ((this.state.pageRange + 1) * this.state.pageSize) + 1;
    this.setState({
      pageRange: name === 'prev' ? this.state.pageRange - 1 : this.state.pageRange + 1,
      page: name === 'prev' ? prevPageNumber : nextPageNumber,
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  onClickChangeState = (state) => {
    this.setState({
      page: 1,
      pageRange: 0,
      state: state,
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  onChangeSort = (e) => {
    this.setState({
      page: 1,
      pageRange: 0,
      sort: e.target.value,
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  onClickChangeDirection = () => {
    this.setState({
      page: 1,
      pageRange: 0,
      direction: this.state.direction === 'desc' ? 'asc' : 'desc',
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  async fetchIssues() {
    const selectedFilter = {
      state: this.state.state,
      sort: this.state.sort,
      direction: this.state.direction,
      page: this.state.page,
      pageRange: this.state.pageRange
    };
    return await this.props.actions.fetchIssues(selectedFilter);
  }

  render() {
    return (
      this.state.loading ? <Spinner /> :
        <div>
          <Container>
            <IssueCardList
              state={this.state.state}
              sort={this.state.sort}
              direction={this.state.direction}
              issues={this.props.issues.issues}
              onClickChangeState={this.onClickChangeState}
              onClickChangeDirection={this.onClickChangeDirection}
              onChangeSort={this.onChangeSort}
            />
            <Row className="justify-content-center">
              <IssuePaginationList
                currentPage={this.state.page}
                pageRange={this.state.pageRange}
                pageSize={this.state.pageSize}
                totalPage={this.props.issues.totalPage}
                onClickChangePage={this.onClickChangePage}
                onClickChangePageRange={this.onClickChangePageRange}
              />
            </Row>
          </Container>
        </div>
    );
  }
}

Issues.propTypes = {
  actions: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    issues: state.issues,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(issuesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
