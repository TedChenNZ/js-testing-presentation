import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';
import Store from '../../store';
import CounterDisplay from './CounterDisplay';
import CounterSave from './CounterSave';

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
        <AppBar title='Counter App'>
          <Navigation type='horizontal'>
            <CounterSave />
          </Navigation>
        </AppBar>
        <Card style={{width: '350px', marginTop: '2em'}}>
          <CardTitle title="Counter" />
          <CardText>
            <CounterDisplay count={Store.count} />
            <div id='increments'>increments: {Store.increments}</div>
            <div id='decrements'>decrements: {Store.decrements}</div>
          </CardText>
          <CardActions>
            <IconButton id='increment' icon='add' onClick={this.increment} />
            <IconButton id='decrement' icon='remove' onClick={this.decrement} />
          </CardActions>
        </Card>
      </div>
    );
  }
};

export default Counter;
