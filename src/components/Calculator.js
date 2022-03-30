import React, { PureComponent } from 'react';
// import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="result">0</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 tab">
            <button type="button" name="AC" className="element">AC</button>
            <button type="button" name="+/-" className="element">+/-</button>
            <button type="button" name="%" className="element">%</button>
            <div className="element">7</div>
            <div className="element">8</div>
            <div className="element">9</div>
            <div className="element">4</div>
            <div className="element">5</div>
            <div className="element">6</div>
            <div className="element">1</div>
            <div className="element">2</div>
            <div className="element">3</div>
            <div className="element">0</div>
            <button type="button" name="." className="element">.</button>
          </div>
          <div className="operatorContainer">
            <button type="button" name="÷" className="operator">÷</button>
            <button type="button" name="x" className="operator">x</button>
            <button type="button" name="-" className="operator">-</button>
            <button type="button" name="+" className="operator">+</button>
            <button type="button" name="=" className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}
