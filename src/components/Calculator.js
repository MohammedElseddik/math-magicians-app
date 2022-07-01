import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="clac-container">
        <div className="result">{next || total || 0}</div>
        <button type="button" className="btn" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          %
        </button>
        <button
          type="button"
          className="btn btn-orange"
          onClick={this.handleClick}
        >
          /
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          7
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          8
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          9
        </button>
        <button
          type="button"
          className="btn btn-orange"
          onClick={this.handleClick}
        >
          x
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          4
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          5
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          6
        </button>
        <button
          type="button"
          className="btn btn-orange"
          onClick={this.handleClick}
        >
          -
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          1
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          2
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          3
        </button>
        <button
          type="button"
          className="btn btn-orange"
          onClick={this.handleClick}
        >
          +
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          0
        </button>
        <button type="button" className="btn" onClick={this.handleClick}>
          .
        </button>
        <button
          type="button"
          className="btn btn-orange"
          onClick={this.handleClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;