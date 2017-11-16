import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const CommentCard = ({body}) => {
  return (
   <div>
     {body}
     <div>
       -------------------------------------------------------------
     </div>
   </div>
  )
};

CommentCard.propTypes = {
};

export default CommentCard