import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {Card, CardHeader, Button} from 'reactstrap';

import IssueCard from './IssueCard';
import styles from './IssueCard.css';

class IssueCardList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
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
          />
        )
      });
    };
    const cx = classNames.bind(styles);
    const {onClickChangeState, issues, state} = this.props;
    return (
      <div className={cx('box')}>
        <Card>
          <CardHeader>
            <Button
              active={state === 'open'}
              outline
              color="secondary"
              onClick={() => onClickChangeState('open')}>
              Open
            </Button>
            <Button
              active={state === 'closed'}
              outline
              color="secondary"
              onClick={() => onClickChangeState('closed')}>
              Closed
            </Button>
            <Button
              active={state === 'all'}
              outline
              color="secondary"
              onClick={() => onClickChangeState('all')}>
              All
            </Button>
          </CardHeader>
        </Card>
        {mapToComponents(issues)}
      </div>
    )
      ;
  }
}

IssueCardList.propTypes = {
  issues: PropTypes.array,
  onClickChangeState: PropTypes.func
};

export default IssueCardList