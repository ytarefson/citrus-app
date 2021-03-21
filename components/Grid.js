import React, { useState, useEffect } from 'react';
import Rectangle from './Rectangle';
import Lines from './Lines';
import { useTick } from '@inlet/react-pixi'

function Grid(props) {
    const [boxWidth, setBoxWidth] = useState(props.width / (props.grid.W+3));  
    const [subgrid, setSubgrid] = useState([]);
    let i = 0; 
    useTick(delta => {
          i += 0.05 * delta;
      })

    useEffect(() => {
      setBoxWidth(props.width / (props.grid.W+3 ));
      let subgrid = []; 
      for (let i = 0; i <= props.grid.W*props.grid.H-1; i++) {
        subgrid.push(
          <Rectangle  key={`rect-${i}-${props.width}`} 
                      x={ 20+(i%props.grid.W)*boxWidth }
                      y={ 20 + Math.floor(i / props.grid.W)*boxWidth }
                      width={ boxWidth }
                      fill={0x111111} />)
      }
      setSubgrid(subgrid);
    }, [props])
    
    return (
      <>        
        {subgrid}
        <Lines lines={props.lines} boxWidth={boxWidth}/>
      </>
    );    
}

export default Grid;