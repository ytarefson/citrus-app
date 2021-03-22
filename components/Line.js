import React, { useState, useEffect } from 'react';
import LineOne from './LineOne';
import getRandomColor from '../utils/getRandomColor';

// Изначальная задача мне показалась, что линия может прерываться. Поэтому каждая линия (Line) состоит из отрезков (LineOne) между двумя точками.

function Line(props) {
  const [line, setLine] = useState([]);
  let color = getRandomColor();

  useEffect(() => {
    let subline = []; 
    for (let i = 0; i <= props.line.length-2; i++) {
      subline.push(
        <LineOne  key={`line-${i}${props.line[i]}`} 
                  color={color}
                  boxWidth={props.boxWidth}
                  pointOne={{
                      x: i,
                      y: props.line[i]
                  }}
                  pointTwo={{
                      x: i+1,
                      y:props.line[i+1]
                      }} 
                  />)
    }
    setLine(subline);
  }, [props.width]) 
    
    return (
      <>
        {line}
      </>
    )
  }

export default Line;