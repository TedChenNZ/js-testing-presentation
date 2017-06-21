import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Store from '../../store';
import API from '../../api';
import { Button } from 'react-toolbox/lib/button';

class CounterSave extends Component {
  save() {
    API.saveFile(Store.saveFile);
  }

  load() {
    API.getSaveFile().then(saveFile => {
      console.log('loadSaveFile')
      Store.loadSaveFile(saveFile);
    });
  }
  render() {
    const buttonStyle = {
      color: 'white',
      fontWeight: '700',
    }
    return (
      <div>
        <Button id='save' onClick={this.save} label='Save' style={buttonStyle} />
        <Button id='load' onClick={this.load} label='Load' style={buttonStyle} />
      </div>
    );
  }
};

export default CounterSave;
