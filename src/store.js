import { extendObservable, action } from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
        increments: 0,
        decrements: 0,
        get count() {
          return this.increments - this.decrements;
        },
        get saveFile() {
          return {
            increments: this.increments,
            decrements: this.decrements,
          }
        },
        loadSaveFile: action((saveFile) => {
          console.log('asdf');
          this.increments = saveFile.increments;
          this.decrements = saveFile.decrements;
        })
    })
  }

  reset() {
    this.increments = 0;
    this.decrements = 0;
  }

  increment(i) {
    this.increments = this.increments + i;
  }

  decrement(i) {
    this.decrements = this.decrements + i;
  }
}

const _Store = new Store();
export default _Store;
