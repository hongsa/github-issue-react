import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const oneMonth = 86400000 * 30;
const oneYear = 86400000 * 365;
const CommentTime = ({ time }) => {
  const diff = Math.abs(new Date() - new Date(time));
  if (diff >= oneMonth && diff < oneYear) {
    return (
      <span>
        on&nbsp;<Moment format="DD MMM">{time}</Moment>
      </span>
    );
  } else if (diff >= oneYear) {
    return (
      <span>
        on&nbsp;<Moment format="DD MMM YYYY">{time}</Moment>
      </span>
    );
  } else {
    return <Moment fromNow>{time}</Moment>;
  }
};

CommentTime.propTypes = {
  time: PropTypes.string
};

export default CommentTime;
