import React from 'react';

export default function Square(props) {

  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
  };

  const {onClick, value} = props;

  return (
    <button style={style} onClick = {onClick}>
    {value}
  </button>
  )
};