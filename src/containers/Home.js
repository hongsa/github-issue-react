import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import * as reviewsActions from '../actions/reviews';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'created',
      gender: 'all',
      age: 'all',
      page: 1,
      rating: 'all',

      initLoading: true,
      reviewLoading: false,
      refreshing: false,
      reviewLast: false,
    };
  }

  componentDidMount() {
    this.fetchReviewMain().then(() => {
      this.setState({initLoading: false});
    })
  }

  componentWillReceiveProps(nextProps) {

    // 인피니트 스크롤 마지막 시
    if (nextProps.reviews.reviewLast) {
      this.setState({
        reviewLoading: false,
        refreshing: false,
        reviewLast: nextProps.reviews.reviewLast || false
      });
    }

    // 인피니트 스크롤 에러 시 해당 page 다시 호출
    if (nextProps.reviews.fetchDataError) {
      this.setState({
        page: nextProps.reviews.page,
      });
    }
  }

  async fetchReviewMain() {
    const {order, gender, age, rating, page} = this.state;
    let selectedTags = 'all';
    return await this.props.actions.fetchReviewMain(order, gender, age, selectedTags, rating, page);
  }

  renderReviews = () => {
    const review = this.props.reviews.reviews.map((each) => {
      const webtoonImgUrl = (`http://img.reviewtoon.com/${each.platform}/${each.thumbnail}`);
      return (
        <Col sm="4">
          <Card>
            <CardImg src={webtoonImgUrl} />
            <CardBody>
              <CardTitle>{each.title}</CardTitle>
              <CardText>{each.core_one_line}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    });
    return review
  };


  render() {
    return (
      <Container>
        <Row>
          {this.renderReviews()}
        </Row>
      </Container>
    );
  }
}

Reviews.propTypes = {
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
