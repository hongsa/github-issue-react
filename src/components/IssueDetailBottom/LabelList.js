import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./IssueDetailBottom.css";
import Label from "../Common/Label";

const cx = classNames.bind(styles);
const Labels = ({ labels }) => {
  return labels.map(label => {
    return (
      <div key={label.id} className={cx("label-box")}>
        <Label label={label} />
      </div>
    );
  });
};

Labels.propTypes = {
  labels: PropTypes.array
};

export default Labels;
