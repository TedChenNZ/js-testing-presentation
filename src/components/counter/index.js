import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Counter from './Counter';
import CounterSave from './CounterSave';

class CounterContainer extends Component {
  render() {
    return (
      <div>
        <AppBar title='Counter App'>
          <Navigation type='horizontal'>
            <CounterSave />
          </Navigation>
        </AppBar>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Counter />
        </div>
      </div>
    );
  }
};

export default CounterContainer;
