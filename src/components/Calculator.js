import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="result">0</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 tab">
            <div className="element">AC</div>
            <div className="element">+/-</div>
            <div className="element">%</div>
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
            <div className="element">.</div>
          </div>
          <div className="operatorContainer">
            <p className="operator">÷</p>
            <p className="operator">x</p>
            <p className="operator">-</p>
            <p className="operator">+</p>
            <p className="operator">=</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
