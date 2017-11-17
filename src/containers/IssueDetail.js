import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Row, Col} from 'reactstrap';

import * as issueDetailActions from '../actions/issueDetail';
import {IssueDetailItem, CommentCardList, Spinner} from '../components';

class IssueDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchIssueDetail().then(() => {
      this.fetchComments().then(() => {
        this.setState({loading: false});
      })
    })
  }

  async fetchIssueDetail() {
    const number = this.props.match.params.number;
    return await this.props.actions.fetchIssueDetail(number);
  }

  async fetchComments() {
    const number = this.props.match.params.number;
    return await this.props.actions.fetchComments(number);
  }

  render() {
    return (
      this.state.loading ? <Spinner /> :
        <div className="flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <IssueDetailItem issue={this.props.issueDetail.issue} />
            </Row>
            <Row className="justify-content-center">
              <CommentCardList data={this.props.issueDetail.comments} />
            </Row>
          </Container>
        </div>
    );
  }
}

IssueDetail.propTypes = {
  actions: PropTypes.object.isRequired,
  issueDetail: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    issueDetail: state.issueDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(issueDetailActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetail);
