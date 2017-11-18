import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Common/Label';

const LabelList = ({labels}) => {
  return (
    labels.map((label) => {
      return (
        <Label
          key={label.id}
          label={label} />
      )
    })
  )
};

LabelList.propTypes = {
  labels: PropTypes.array
};

export default LabelList