import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Common.css";

const cx = classNames.bind(styles);
const Label = ({ label }) => {
  return (
    <span
      key={label.id}
      className={cx("label-box")}
      style={{ backgroundColor: "#" + label.color }}
    >
      <span>{label.name}</span>
    </span>
  );
};

Label.propTypes = {
  label: PropTypes.object
};

export default Label;
