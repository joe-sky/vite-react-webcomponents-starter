import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import { UserInfo } from '../types';

export default class CommonStore {
  userInfo: UserInfo = { pin: 'joe', name: 'Joe_Sky' };

  constructor() {
    makeAutoObservable(this);
  }
}
