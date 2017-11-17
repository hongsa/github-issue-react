import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardHeader, CardBody} from 'reactstrap';
import Moment from 'react-moment';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

import styles from './CommentCard.css';

const cx = classNames.bind(styles);
const CommentCard = ({body, created, user}) => {
  return (
    <Row className={cx('box')}>
      <Col sm="1">
        <img
          className={cx('avatar-img')}
          src={user.avatar_url}
          alt={user.login} />
      </Col>
      <Col sm="11">
        <Card>
          <CardHeader className={cx('comment-state')}>
            <span><strong>{user.login}</strong>&nbsp;commented&nbsp;</span>
            <Moment fromNow>{created}</Moment>
          </CardHeader>
          <CardBody>
            <ReactMarkdown source={body} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

CommentCard.propTypes = {
  body: PropTypes.string,
  created: PropTypes.string,
  user: PropTypes.object
};

export default CommentCard