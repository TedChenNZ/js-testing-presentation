import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import CounterContainer from './components/counter';

class App extends Component {
  render() {
    return (
      <CounterContainer />
    );
  }
};

export default App;
