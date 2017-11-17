import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import classNames from 'classnames/bind';
import Moment from 'react-moment';

import styles from './IssueDetailItem.css';
import CommentCard from '../CommentCard/CommentCard';


const cx = classNames.bind(styles);
const IssueDetailItem = ({issue}) => {
  const {title, body, number, state, created_at, user, comments} = issue;
  const currentStateIcon = () => {
    if (state === 'open') {
      return (
        <Button color="success" size="sm" className={cx('state-btn')}>
          <i className="fa fa-check-circle-o fa-lg" style={{color: '#white', padding: '2px'}} />
          Open
        </Button>
      )
    } else {
      return (
        <Button color="danger" size="sm" className={cx('state-btn')}>
          <i className="fa fa-ban fa-lg" style={{color: 'white', padding: '2px'}} />
          Closed
        </Button>
      )
    }
  };

  return (
    <div className={cx('box')}>
      <h2>
        <span className={cx('title')}>{title}</span>&nbsp;&nbsp;
        <span className={cx('number')}>#{number}</span>
      </h2>
      <div className={cx('state-box')}>
          <span>
            {currentStateIcon()}
            {user.login}&nbsp;opened&nbsp;this issue&nbsp;
            <Moment fromNow>{created_at}</Moment>
          </span>
        <span>&nbsp;·&nbsp;{comments}&nbsp;comments</span>
      </div>
      <CommentCard
        body={body}
        created={created_at}
        user={user}
      />
    </div>
  )
};

IssueDetailItem.propTypes = {
  issue: PropTypes.object
};

export default IssueDetailItem