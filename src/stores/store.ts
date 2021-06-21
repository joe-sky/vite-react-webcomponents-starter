import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import CommonStore from './common';

export class RootStore {
  common = new CommonStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
