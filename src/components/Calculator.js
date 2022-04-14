import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import calculate from '../logic/calculate';
import Footer from './footer';
import './header.css';

const buttons = [
  {
    name: 'AC',
    value: 'AC',
  },
  {
    name: '+/-',
    value: '+/-',
  },
  {
    name: '%',
    value: '%',
  },
  {
    name: '7',
    value: '7',
  },
  {
    name: '8',
    value: '8',
  },
  {
    name: '9',
    value: '9',
  },
  {
    name: '4',
    value: '4',
  },
  {
    name: '5',
    value: '5',
  },
  {
    name: '6',
    value: '6',
  },
  {
    name: '1',
    value: '1',
  },
  {
    name: '2',
    value: '2',
  },
  {
    name: '3',
    value: '3',
  },
];

const operators = [
  {
    name: '÷',
    value: '÷',
  },
  {
    name: 'x',
    value: 'x',
  },
  {
    name: '-',
    value: '-',
  },
  {
    name: '+',
    value: '+',
  },
  {
    name: '=',
    value: '=',
  },
];

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null });
  const { total, next } = state;

  let result;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  const handleClick = (e) => {
    const update = calculate(state, e.target.innerText);
    setState(update);
  };
  return (
    <>
      <div className="header">
        <h1>Math Magicians</h1>
        <nav className="navItems">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/Calculator">Calculator</Link>
          <Link className="item" to="/Quote">Quote</Link>
        </nav>
      </div>
      <div className="calc-container">
        <h2>Let&apos;s do some math!</h2>
        <div className="container">
          <div className="resultContainer">
            <div className="result">{result}</div>
          </div>
          <div className="row">
            <div className="col-xs-12 tab">
              {buttons.map((button) => (<button key={button.name} onClick={handleClick} type="button" className="element">{button.value}</button>))}
              <button type="button" name="0" className="element" onClick={handleClick}>0</button>
              <button type="button" name="." className="element" onClick={handleClick}>.</button>
            </div>
            <div className="operatorContainer">
              {operators.map((button) => (<button key={button.name} onClick={handleClick} type="button" className="operator">{button.value}</button>))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
