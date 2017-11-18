import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './IssueDetailBottom.css';
import Label from '../Common/Label';

const cx = classNames.bind(styles);
const Labels = ({labels}) => {
  const mapToComponents = labels.map((label) => {
    return (
      <div
        key={label.id}
        className={cx('label-box')}>
        <Label label={label} />
      </div>
    )
  });
  return mapToComponents
};

Labels.propTypes = {
  labels: PropTypes.array
};

export default Labels