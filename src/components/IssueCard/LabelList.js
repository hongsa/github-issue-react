import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Common/Label';

const LabelList = ({labels}) => {
  const mapToComponents = labels.map((label) => {
    return (
      <Label
        key={label.id}
        label={label}/>
    )
  });
  return mapToComponents
};

LabelList.propTypes = {
  labels: PropTypes.array
};

export default LabelList