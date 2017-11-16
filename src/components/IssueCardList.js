import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
import IssueCard from './IssueCard';

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
          />
        )
      });
    };

    return (
      <div>
        <ListGroup>{mapToComponents(this.props.issues)}</ListGroup>
      </div>
    );
  }
}

IssueCardList.propTypes = {
};

export default IssueCardList