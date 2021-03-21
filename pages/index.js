import React, {useState } from 'react';
import useWindowSize from '../utils/useWindowSize';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const MyStageNoSSR = dynamic(() => import('../components/MyStage'), {
  ssr: false
});

function Home() { 
  const { height, width } = useWindowSize(); // Хук для resize окна
  const [stageWH, setStageWH] = useState({ W: 6, H: 4 }); // Задаем размер сетки
  const [lines, setLines] = useState([ 
    [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3],
    [1, 2, 1, 2, 1, 2], [0, 1, 0, 1, 0, 1], [2, 3, 2, 3, 2, 3], [2, 1, 2, 1, 2, 1],
    [1, 0, 1, 0, 1, 0], [3, 2, 3, 2, 3, 2], [0, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1],
    [2, 3, 3, 3, 3, 2], [3, 2, 2, 2, 2, 3], [3, 3, 0, 0, 3, 3], [0, 0, 1, 1, 0, 0],
    [0, 0, 3, 3, 0, 0], [3, 3, 2, 2, 3, 3], [1, 2, 3, 3, 2, 1], [2, 1, 0, 0, 1, 2]
  ])

  return (
    <div className={styles.stage}>
      <MyStageNoSSR width={width} height={height} grid={stageWH} lines={lines}/>
    </div>

  );
}
  
export default Home