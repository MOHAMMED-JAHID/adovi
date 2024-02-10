import React from 'react';
import { useSelector } from 'react-redux';

function ValueDisplay() {
  const values = useSelector(state => state.values);

  return (
    <div>
      <h2>Values</h2>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ValueDisplay;
