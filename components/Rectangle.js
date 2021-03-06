import React, { useCallback } from 'react'
import { Graphics } from '@inlet/react-pixi';

function Rectangle(props) {
    const draw = useCallback((g) => {
      g.clear();
      g.beginFill(props.fill);
      g.lineStyle(4, 0x333333, 1)
      g.drawRoundedRect(props.x, props.y, props.width, props.width, 15);
      g.endFill();
    }, []);
  
    return <Graphics draw={draw} />;
}

export default Rectangle;