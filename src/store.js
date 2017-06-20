import { observable, computed } from 'mobx';

class Store {
  @observable increments = 0;
  @observable decrements = 0;

  @computed get count() {
    return this.increments - this.decrements;
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
