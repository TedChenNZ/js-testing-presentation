import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Counter from './components/counter/Counter';

@observer
class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
};

export default App;
