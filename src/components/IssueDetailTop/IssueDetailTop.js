import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "reactstrap";
import classNames from "classnames/bind";

import styles from "./IssueDetailTop.css";
import CommentTime from "../Common/CommentTime";

const cx = classNames.bind(styles);
const IssueDetailItem = ({ issue }) => {
  const { title, number, state, created_at, user, comments } = issue;
  const currentStateIcon = () => {
    if (state === "open") {
      return (
        <Button color="success" size="sm" className={cx("state-btn")}>
          <i
            className="fa fa-check-circle-o fa-lg"
            style={{ color: "#white", padding: "2px" }}
          />
          Open
        </Button>
      );
    } else {
      return (
        <Button color="danger" size="sm" className={cx("state-btn")}>
          <i
            className="fa fa-ban fa-lg"
            style={{ color: "white", padding: "2px" }}
          />
          Closed
        </Button>
      );
    }
  };

  return (
    <div className={cx("box")}>
      <Row>
        <Col sm="10">
          <span className={cx("title")}>{title}</span>&nbsp;&nbsp;
          <span className={cx("number")}>#{number}</span>
        </Col>
        <Col sm="2" className="text-right">
          <Button className={cx("issue-btn")} color="success" size="sm">
            New issue
          </Button>
        </Col>
      </Row>
      <div className={cx("state-box")}>
        <span>
          {currentStateIcon()}
          {user.login}&nbsp;opened&nbsp;this issue&nbsp;
          <CommentTime time={created_at} />
        </span>
        <span>&nbsp;·&nbsp;{comments}&nbsp;comments</span>
      </div>
    </div>
  );
};

IssueDetailItem.propTypes = {
  issue: PropTypes.object
};

export default IssueDetailItem;
