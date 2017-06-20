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
        <button onClick={this.increment}>
          +
        </button>
        <CounterDisplay count={Store.count} />
        <button onClick={this.decrement}>
          -
        </button>
        <div>increments: {Store.increments}</div>
        <div>decrements: {Store.decrements}</div>
      </div>
    );
  }
};

export default Counter;
