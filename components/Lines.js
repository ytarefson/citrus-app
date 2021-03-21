import React , {useState, useEffect} from 'react';
import Line from './Line';

export default function Lines(props) {
  const [lines , setLines] = useState([]);
    
  useEffect(() => {
    let lines = [];
    props.lines.map(line => 
      lines.push(<Line line={line} boxWidth={props.boxWidth} key={`line-${line.toString()}`}/>));
    setLines(lines);
  }, [props]);

  return (
    <>
      {lines}
    </>
  )
}
