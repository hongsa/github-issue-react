import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Row} from 'reactstrap';

import * as issuesActions from '../actions/issues';
import IssueCardList from '../components/IssueCardList';
import IssuePaginationList from '../components/IssuePaginationList';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      state: 'open',
      sort: 'created',
      direction: 'desc',
      page: 1,
      pageRange: 0,
      pageSize: 10
    };
  }

  componentDidMount() {
    this.fetchIssues().then(() => {
      this.setState({loading: false});
    })
  }

  componentWillReceiveProps(nextProps) {

    // 인피니트 스크롤 에러 시 해당 page 다시 호출
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

  onClickPageChange = (page) => {
    this.setState({
      page: page,
      loading: true
    }, () => {
      this.fetchIssues().then(() => {
        this.setState({loading: false});
      })
    })
  };

  onClickPageRangeChange = (name) => {
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

  async fetchIssues() {
    const {state, sort, direction, page} = this.state;
    return await this.props.actions.fetchIssues(state, sort, direction, page);
  }

  render() {
    return (
      <Container>
        <Row>
          <IssueCardList issues={this.props.issues.issues} />
        </Row>

        <Row>
          <IssuePaginationList
            currentPage={this.state.page}
            pageRange={this.state.pageRange}
            pageSize={this.state.pageSize}
            totalPage={this.props.issues.totalPage}
            onClickPageChange={this.onClickPageChange}
            onClickPageRangeChange={this.onClickPageRangeChange}
          />
        </Row>
      </Container>
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
