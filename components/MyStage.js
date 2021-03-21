import React, { useEffect, useState } from 'react'
import { Stage } from '@inlet/react-pixi'
import Grid from './Grid';

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const Size = ({ children }) => {
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    const update = () => setSize(getSize());
    window.onresize = update;
    return () => (window.onresize = null);
  }, []);
  return children(size);
};

function MyStage (props) {
  return (
    <Stage 
      {...getSize()}
      options={{
        backgroundColor: 0x333333,
        resizeTo: window,
        autoDensity: true
      }}
     >
       <Size>
        {({ width, height }) => (
          <Grid width={width} height={height} grid={props.grid} lines={props.lines}/>
        )}
      </Size>
    </Stage>
  );
}


export default MyStage