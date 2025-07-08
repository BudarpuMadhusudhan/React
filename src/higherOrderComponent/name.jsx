import React from 'react';
import withToolTip from './withToolTip';

function Movie(props) {
  return (
    <span style={{ position: 'relative', cursor: 'pointer' }}>
      Madhusudhan
      {props.showTooltip && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          background: '#222',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '4px',
          marginTop: '4px',
          zIndex: 1000
        }}>
          King Of Andhra
        </div>
      )}
    </span>
  );
}

export default withToolTip(Movie);
