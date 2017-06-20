import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Store from '../../store';
import CounterDisplay from './CounterDisplay';

@observer
class Counter extends Component {
  increment() {
    Store.increment(1);
  }

  decrement() {
    Store.decrement(1);
  }
  render() {
    return (
      <div>
        <button id='increment' onClick={this.increment}>
          +
        </button>
        <CounterDisplay count={Store.count} />
        <button id='decrement' onClick={this.decrement}>
          -
        </button>
        <div id='increments'>increments: {Store.increments}</div>
        <div id='decrements'>decrements: {Store.decrements}</div>
      </div>
    );
  }
};

export default Counter;
