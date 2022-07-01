import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [state, setState] = useState(0);
  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (
    <div className="clac-container">
      <div className="result">{state.next || state.total || 0}</div>
      <button type="button" className="btn" onClick={handleClick}>
        AC
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        +/-
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        %
      </button>
      <button type="button" className="btn btn-orange" onClick={handleClick}>
        /
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        7
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        8
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        9
      </button>
      <button type="button" className="btn btn-orange" onClick={handleClick}>
        x
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        4
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        5
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        6
      </button>
      <button type="button" className="btn btn-orange" onClick={handleClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        1
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        2
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        3
      </button>
      <button type="button" className="btn btn-orange" onClick={handleClick}>
        +
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        0
      </button>
      <button type="button" className="btn" onClick={handleClick}>
        .
      </button>
      <button type="button" className="btn btn-orange" onClick={handleClick}>
        =
      </button>
    </div>
  );
}

export default Calculator;
