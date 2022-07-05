import React from 'react';

export const Square = ({ value }) => {
  return <button className="square" onClick={() => { alert(value) }}>{value}</button>;
};
