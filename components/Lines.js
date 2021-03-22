import React , {useState, useEffect} from 'react';
import Line from './Line';

export default function Lines(props) {
  const [lines , setLines] = useState([]);
    
  useEffect(() => {
    let lines = [];
    console.log(`Line - ${props.boxWidth}`)
    props.lines.map(line => 
      lines.push(<Line line={line} boxWidth={props.boxWidth} key={`line-${line.toString()}-${props.boxWidth}`}/>));
    setLines(lines);
  }, [props]);

  return (
    <>
      {lines}
    </>
  )
}
