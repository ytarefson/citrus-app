import React from 'react'
import { Stage } from '@inlet/react-pixi'
import Grid from './Grid';

function MyStage (props) {
  return (
    <Stage 
      width={props.width}
      height={props.height}
      options={{
        backgroundColor: 0x666666,
        resizeTo: window,
        autoDensity: true
      }}
     >
       <Grid width={props.width} height={props.height} grid={props.grid} lines={props.lines}/>
    </Stage>
  );
}


export default MyStage