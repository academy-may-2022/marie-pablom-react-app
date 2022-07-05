import React from 'react';

const Square = ({ value }) => {
  return <button className="square" onClick={() => { alert(value) }}>{value}</button>;
};

export default Square;
