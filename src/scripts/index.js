import React from 'react';
import ReactDOM from 'react-dom';
import { MrSmiley } from './components/MrSmiley';
import { range } from 'd3';

const width = 160;
const height = 160;

const array = range(9*5);

const colors = Array("yellow", "green", "blue", "purple", "red");


const App = () => {
  return (
    <MrSmiley 
      width={width}
      height={height}
      array={array}
      colors={colors}
    />
  )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);