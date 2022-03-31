import React from 'react';
import calculate from '../logic/calculate';

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

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => (calculate(state, e.target.innerText)));
  }

  render() {
    const { total, next } = this.state;
    let result;
    if (total === null && next !== null) {
      result = next;
    } else if (total !== null && next === null) {
      result = total;
    } else {
      result = next;
    }
    return (
      <div className="container">
        <div className="header">
          <div className="result">{result}</div>
        </div>
        <div className="row">
          <div className="col-xs-12 tab">
            {buttons.map((button) => (<button key={button.name} onClick={this.handleClick} type="button" className="element">{button.value}</button>))}
            <button type="button" name="0" className="element" onClick={this.handleClick}>0</button>
            <button type="button" name="." className="element" onClick={this.handleClick}>.</button>
          </div>
          <div className="operatorContainer">
            {operators.map((button) => (<button key={button.name} onClick={this.handleClick} type="button" className="operator">{button.value}</button>))}
          </div>
        </div>
      </div>
    );
  }
}
