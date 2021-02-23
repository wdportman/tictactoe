import React from 'react';
import Square from './Square';

export default function Board(props) {

  const {squares, onClick} = props;

  return (
  <div>
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