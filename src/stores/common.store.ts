import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import { UserInfo } from '../models';

export default class CommonStore {
  userInfo: UserInfo = { pin: 'joe', name: 'Joe_Sky' };

  constructor() {
    makeAutoObservable(this);
  }
}
