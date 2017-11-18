import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom'
import classNames from 'classnames/bind';
import Moment from 'react-moment';

import styles from './IssueCard.css';
import LabelList from './LabelList';

const cx = classNames.bind(styles);
const IssueCard = ({title, number, commentCount, userName, created, labels, state, closed}) => {
  const currentStateText = () => {
    if (state === 'open') {
      return (
        <div>
          #{number}&nbsp;{state}&nbsp;
          <Moment fromNow>{created}</Moment>
          &nbsp;by&nbsp;{userName}
        </div>
      )
    } else {
      return (
        <div>
          #{number}&nbsp;by&nbsp;{userName}
          &nbsp;was&nbsp;{state}&nbsp;
          <Moment fromNow>{closed}</Moment>
        </div>
      )
    }
  };

  const currentStateIcon = () => {
    if (state === 'open') {
      return (
        <i className="fa fa-check-circle-o fa-lg" style={{color: '#28a745', padding: '3px'}} />
      )
    } else {
      return (
        <i className="fa fa-ban fa-lg" style={{color: '#cb2431', padding: '3px'}} />
      )
    }
  };

  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm="10" xs="9" className="text-left">
            <Link to={`/issue/${number}`} className={cx('card')}>
              {currentStateIcon()}
              <span className={cx('title')}>
                {title}
              </span>
            </Link>
            <LabelList labels={labels} />
          </Col>
          <Col sm="2" xs="3" className="text-right">
            <div className={cx('comment')}>
              <i className="fa fa-comment-o fa-lg" />&nbsp;{commentCount}
            </div>
          </Col>
        </Row>
        <Row className={cx('state-text')}>
          <Col className="text-left">
            {currentStateText()}
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
  labels: PropTypes.array,
  state: PropTypes.string,
  closed: PropTypes.string,
};

export default IssueCard