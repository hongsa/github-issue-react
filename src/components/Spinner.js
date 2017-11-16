import React from 'react';
import {PulseLoader} from 'react-spinners';

const style = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};

const Spinner = () => {
  return (
    <div style={style}>
      <PulseLoader
        color={'#0366d6'}
        size={40}
      />
    </div>
  );
};

export default Spinner;