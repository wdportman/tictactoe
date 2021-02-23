import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default function Board(props) {

  const {squares, onClick} = props;

  return (
  <div style = {style}>
    <Square value="1" onClick={() => onClick("Dummy value")}/>
    <Square value="2" onClick={() => onClick("Dummy value")}/>
    <Square value="3" onClick={() => onClick("Dummy value")}/>
    <Square value="4" onClick={() => onClick("Dummy value")}/>
    <Square value="5" onClick={() => onClick("Dummy value")}/>
    <Square value="6" onClick={() => onClick("Dummy value")}/>
    <Square value="7" onClick={() => onClick("Dummy value")}/>
    <Square value="8" onClick={() => onClick("Dummy value")}/>
    <Square value="9" onClick={() => onClick("Dummy value")}/>
  </div>
  )
};