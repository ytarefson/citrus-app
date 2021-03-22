import React, { useCallback } from 'react';
import {Graphics} from '@inlet/react-pixi';

function LineOne(props) {
  console.log(`LineOne - ${props.boxWidth}`)
  let point1 = {
    x: ((props.pointOne.x*props.boxWidth)+20+props.boxWidth/2),
    y: props.pointOne.y*props.boxWidth+20+props.boxWidth/2
  };
  let point2 = {
    x: ((props.pointTwo.x*props.boxWidth)+20+props.boxWidth/2),
    y: props.pointTwo.y*props.boxWidth+20+props.boxWidth/2
  };

  const draw = useCallback((g) => {  
    g.clear();
    g.beginFill(0x111111);
    g.lineStyle(4, `0x${props.color}`, 1);
    g.moveTo(point1.x, point1.y);
    g.lineTo(point2.x, point2.y);
    g.endFill();
  }, [props]);
  
  return (
  <>
    <Graphics draw={draw}/>
  </>
  )
}

export default LineOne;