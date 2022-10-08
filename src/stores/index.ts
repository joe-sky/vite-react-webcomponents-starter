import { createContext, useContext } from 'react';
import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import Common from './common';

export class Store {
  common = new Common(this);

  constructor() {
    makeAutoObservable(this);
  }
}

export const StoreContext = createContext({} as Store);

export const useStore = () => useContext(StoreContext);
