import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {Card, CardHeader, Button, Row, Col, Input} from 'reactstrap';

import styles from './IssueCard.css';
import IssueCard from './IssueCard';

class IssueCardList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }

  render() {
    const cx = classNames.bind(styles);
    const {issues, state, sort, direction, onClickChangeState, onClickChangeDirection, onChangeSort}
      = this.props;
    const mapToComponents = issues => {
      return issues.map((issue) => {
        return (
          <IssueCard
            key={issue.id}
            title={issue.title}
            number={issue.number}
            commentCount={issue.comments}
            userName={issue.user.login}
            created={issue.created_at}
            labels={issue.labels}
            state={issue.state}
            closed={issue.closed_at}
          />
        )
      });
    };

    return (
      <div className={cx('box')}>
        <Card>
          <CardHeader>
            <Row>
              <Col sm="8" xs="6">
                <Button
                  className={cx('btn-state')}
                  active={state === 'open'}
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => onClickChangeState('open')}>
                  Open
                </Button>
                <Button
                  className={cx('btn-state')}
                  active={state === 'closed'}
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => onClickChangeState('closed')}>
                  Closed
                </Button>
                <Button
                  className={cx('btn-state')}
                  active={state === 'all'}
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => onClickChangeState('all')}>
                  All
                </Button>
              </Col>
              <Col sm="3" xs="4" className="text-right">
                <Input
                  type="select"
                  size="sm"
                  value={sort}
                  onChange={onChangeSort}
                >
                  <option value="created">created</option>
                  <option value="updated">updated</option>
                  <option value="comments">comments</option>
                </Input>
              </Col>
              <Col sm="1" xs="2" className="text-left">
                <Button
                  color="primary"
                  size="sm"
                  onClick={onClickChangeDirection}
                >
                  {direction === 'desc' ? <i className="fa fa-arrow-down" />
                    : <i className="fa fa-arrow-up" /> }
                </Button>
              </Col>
            </Row>
          </CardHeader>
        </Card>
        {mapToComponents(issues)}
      </div>
    );
  }
}

IssueCardList.propTypes = {
  issues: PropTypes.array,
  state: PropTypes.string,
  sort: PropTypes.string,
  direction: PropTypes.string,
  onClickChangeDirection: PropTypes.func,
  onClickChangeState: PropTypes.func,
  onChangeSort: PropTypes.func
};

export default IssueCardList