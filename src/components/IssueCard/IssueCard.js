import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom'
import classNames from 'classnames/bind';
import Moment from 'react-moment';

import styles from './IssueCard.css';
import Labels from './Labels';

const IssueCard = ({title, number, commentCount, userName, created, labels}) => {
  const cx = classNames.bind(styles);
  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm="11" className="text-left">
            <Link to={`/issue/${number}`} className={cx('card')}>
              <span className={cx('title')}>
                {title}
              </span>
            </Link>
            <Labels labels={labels} />
          </Col>
          <Col sm="1" className="text-right">
            <div className={cx('comment')}>
              <i className="fa fa-comment-o fa-lg" />&nbsp;
              {commentCount}
            </div>
          </Col>
        </Row>
        <Row className={cx('time')}>
          <Col className="text-left">
            <div>
              #{number}&nbsp;opened&nbsp;
              <Moment fromNow>{created}</Moment>
              &nbsp;by&nbsp;{userName}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
};

IssueCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  commentCount: PropTypes.number,
  userName: PropTypes.string,
  created: PropTypes.string,
  labels: PropTypes.array
};

export default IssueCard