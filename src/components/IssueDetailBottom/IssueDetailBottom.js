import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col,Button} from 'reactstrap';
import classNames from 'classnames/bind';

import styles from './IssueDetailBottom.css';
import CommentCard from './CommentCard';

class CommentCardList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
    const {body, created_at, user, labels} = this.props.issue;
    const cx = classNames.bind(styles);

    const mapToComponents = comments => {
      return comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            body={comment.body}
            created={comment.created_at}
            user={comment.user}
          />
        )
      });
    };

    const LabelList = () => {
      const mapToComponents = labels.map((label) => {
        return (
          <div
            key={label.id}
            className={cx('label-box')}
            style={{backgroundColor: '#' + label.color}}
          >
            <span>{label.name}</span>
          </div>
        )
      });
      return mapToComponents
    };

    return (
      <Row>
        <Col sm="9">
          <CommentCard
            body={body}
            created={created_at}
            user={user}
          />
          {mapToComponents(this.props.comments)}
        </Col>
        <Col sm="3">
          <div className={cx('item-box')}>
            <div className={cx('item')}>Assignees</div>
            <div className={cx('item')}>No one assigned</div>
          </div>
          <div className={cx('item-box')}>
            <div className={cx('item')}>Labels</div>
            <div className={cx('item')}>
              {LabelList()}
            </div>
          </div>
          <div className={cx('item-box')}>
            <div className={cx('item')}>Projects</div>
            <div className={cx('item')}>None yet</div>
          </div>
          <div className={cx('item-box')}>
            <div className={cx('item')}>Milestone</div>
            <div className={cx('item')}>No milestone</div>
          </div>
          <div className={cx('item-box')}>
            <div className={cx('item')}>Notifications</div>
            <Button
              outline
              color="secondary"
              size="sm">Subscribe</Button>
            <div className={cx('item')}>You’re not receiving notifications from this thread.</div>
          </div>
        </Col>
      </Row>
    );
  }
}

CommentCardList.propTypes = {
  comments: PropTypes.array,
  issue: PropTypes.object
};

export default CommentCardList