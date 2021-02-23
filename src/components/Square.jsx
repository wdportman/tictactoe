import React from 'react';

export default function Square(props) {

  const {onClick, value} = props;

  <button onClick = {onClick}>
    {value}
  </button>
};