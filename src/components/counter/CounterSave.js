import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Store from '../../store';
import API from '../../api';

@observer
class CounterSave extends Component {
  save() {
    API.saveFile(Store.saveFile);
  }

  load() {
    API.getSaveFile().then(saveFile => {
      Store.loadSaveFile(saveFile);
    });
  }
  render() {
    return (
      <div>
        <button id='save' onClick={this.save}>
          Save
        </button>
        <button id='load' onClick={this.load}>
          Load
        </button>
      </div>
    );
  }
};

export default CounterSave;
