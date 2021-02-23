import React from 'react';

export default function Square(props) {

  const {onClick, value} = props;

  return (
    <button className="square" onClick = {onClick}>
    {value}
  </button>
  )
};