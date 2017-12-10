import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "reactstrap";

import * as issueDetailActions from "../actions/issueDetail";
import { IssueDetailTop, IssueDetailBottom, Spinner } from "../components";

class IssueDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commentLoading: true,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchIssueDetail().then(() => {
      this.fetchComments().then(() => {
        this.setState({ loading: false });
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    // 코멘트 페이지 마지막 시
    if (nextProps.issueDetail.commentLast) {
      this.setState({
        commentLoading: false,
        commentLast: nextProps.issueDetail.commentLast || false
      });
    }

    // 코멘트 더 불러오기
    if (
      !nextProps.issueDetail.commentLast &&
      nextProps.issueDetail.commentsTotalPage > 1
    ) {
      this.setState(
        {
          commentLoading: true,
          page: this.state.page + 1
        },
        () => {
          this.fetchComments().then(() => {
            this.setState({ commentLoading: false });
          });
        }
      );
    }

    // 코멘트 에러 시 해당 page 다시 호출
    if (nextProps.issueDetail.commentsFetchDataError) {
      this.setState({
        page: nextProps.issueDetail.page
      });
    }
  }

  async fetchIssueDetail() {
    const number = this.props.match.params.number;
    return await this.props.actions.fetchIssueDetail(number);
  }

  async fetchComments() {
    const number = this.props.match.params.number;
    const { page } = this.state;
    return await this.props.actions.fetchComments(number, page);
  }

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div>
        <Container>
          <IssueDetailTop issue={this.props.issueDetail.issue} />
          <IssueDetailBottom
            issue={this.props.issueDetail.issue}
            comments={this.props.issueDetail.comments}
          />
        </Container>
      </div>
    );
  }
}

IssueDetail.propTypes = {
  actions: PropTypes.object.isRequired,
  issueDetail: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    issueDetail: state.issueDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(issueDetailActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetail);
