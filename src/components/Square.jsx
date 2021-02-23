import React from 'react';

export default function Square(props) {

  const {onClick, value} = props;

  return (
    <button onClick = {onClick}>
    {value}
  </button>
  )
};