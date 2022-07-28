import { useEffect } from 'react';
import { range } from 'd3';
import Faces from './Faces';
import NavBar from '../NavBar/NavBar';
const width = 160;
const height = 160;

// const array = range(9*5);
const array = Array.from(Array(9 * 5).keys());

const colors = Array("yellow", "green", "blue", "purple", "red");

const MrSmiley = () => {

  return (
    <>
      <NavBar />
      <Faces
        width={width}
        height={height}
        array={array}
        colors={colors}
      />
    </>
  )
};

export default MrSmiley;