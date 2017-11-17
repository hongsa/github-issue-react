import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
import CommentCard from './CommentCard';

class CommentCardList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

  render() {
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

    return (
      <div>
        <ListGroup>{mapToComponents(this.props.data)}</ListGroup>
      </div>
    );
  }
}

CommentCardList.propTypes = {};

export default CommentCardList