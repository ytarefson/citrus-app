import React, { useState, useEffect } from 'react';
import LineOne from './LineOne';
import getRandomColor from '../utils/getRandomColor';

function Line(props) {
  const [points , setPoints] = useState([]);
  const [line, setLine] = useState([]);
  let color = getRandomColor();

  useEffect(() => {
    let pointsArray = [];
    for (let j=0; j<=props.line.length-1; j++) {
      let point = {
        x : (props.boxWidth/2)+props.boxWidth*j,
        y : ((20+props.boxWidth/2)*props.line[j])
      };
      pointsArray.push(point);
    }
    setPoints(pointsArray);
  }, [props]) 

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
  }, [points]) 
    
    return (
      <>
        {line}
      </>
    )
  }

export default Line;