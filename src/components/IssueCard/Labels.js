import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './IssueCard.css';

const cx = classNames.bind(styles);
const Labels = ({labels}) => {
  const mapToComponents = labels.map((label) => {
    return (
      <span
        key={label.id}
        className={cx('label-box')}
        style={{backgroundColor: '#' + label.color}}
      >
        <span>{label.name}</span>
      </span>
    )
  });
  return mapToComponents
};

Labels.propTypes = {
  labels: PropTypes.array
};

export default Labels