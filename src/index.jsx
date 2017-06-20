import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Counter from './components/counter/Counter';

render(
  <AppContainer>
    <Counter />
  </AppContainer>,
  document.getElementById('root')
);
