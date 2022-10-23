import React, { useState } from 'react';
import { buttons, operators } from './Buttons';
import calculate from '../logic/calculate';

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
      <div className="px-2 md:px-16 lg:px-32 pt-28 lg:pt-36 flex flex-col justify-center items-center">
        <h2 className="hidden">Let&apos;s do some math!</h2>
        <div className="card bg-#e0e0e0 w-11/12 rounded-2xl p-4 md:w-8/12">
          <div className="bg-math-background shadow-md w-full h-12 md:h-20 mb-4 rounded-xl flex justify-end items-center text-xl md:text-3xl text-math-header text-opacity-95 px-4 font-semibold">
            {result}
          </div>
          <div className="flex font-semibold select-none">
            <div className="grid grid-cols-3 w-full gap-4 md:text-2xl">
              {buttons.map((button) => (<button key={button.name} onClick={handleClick} type="button" className="shadow-md border rounded-md p-2 md:py-4 hover:bg-math-background">{button.value}</button>))}
              <button type="button" name="0" className="element shadow-md border rounded-md p-2 md:py-4 hover:bg-math-background" onClick={handleClick}>0</button>
              <button type="button" name="." className="element w-full shadow-md border rounded-md p-2 md:py-4 hover:bg-math-background" onClick={handleClick}>.</button>
            </div>
            <div className="flex flex-col w-2/12 pl-4 gap-4">
              {operators.map((button) => (<button key={button.name} onClick={handleClick} type="button" className="shadow-md border rounded-md p-2 md:py-4 focus:bg-math-primary hover:bg-math-background md:text-2xl">{button.value}</button>))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
