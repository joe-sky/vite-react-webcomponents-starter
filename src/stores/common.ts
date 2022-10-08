import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import type { Store } from './index';
import { UserInfo } from '../types';

export default class Common {
  parent: Store;
  userInfo: UserInfo = { pin: 'joe', name: 'Joe_Sky' };

  constructor(parent: Store) {
    makeAutoObservable(this);
    this.parent = parent;
  }
}
