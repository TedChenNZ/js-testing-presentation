import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { GREEN, BLUE } from '../../constants';

@observer
class CounterDisplay extends Component {
  static propTypes = {
    count: React.PropTypes.number,
  }

  defaultProps = {
    count: 0,
  }

  state = {
    active: false,
  }

  style() {
    let background = GREEN;
    if (this.state.active) {
      background = BLUE;
    }
    return {
      background,
      color: 'white',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: '3em',
    };
  }

  toggleActive() {
    this.setState((state, props) => {
      return {
        active: !this.state.active
      }
    });
  }

  render() {
    return (
      <div style={this.style()} onClick={this.toggleActive.bind(this)}>
        <span id='count'>{this.props.count}</span>
      </div>
    );
  }
};

export default CounterDisplay;
