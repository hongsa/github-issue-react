import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
          />
        )
      });
    };
    const cx = classNames.bind(styles);

    return (
      <div className={cx('box')}>
        {mapToComponents(this.props.issues)}
      </div>
    );
  }
}

IssueCardList.propTypes = {
  issues: PropTypes.array
};

export default IssueCardList