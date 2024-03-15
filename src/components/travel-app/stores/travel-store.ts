import { observable, makeObservable, computed, action } from 'mobx'

class TravelStore{

  constructor() {
    makeObservable(this)
  }
}