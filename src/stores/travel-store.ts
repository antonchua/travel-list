import { observable, makeObservable, computed, action } from 'mobx'
import { TravelType } from './travel-type'

export class TravelStore {
  @observable.ref
  travelListData: TravelType.ListItemType[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  addTravelListItem(item: TravelType.ListItemType): void {
    const updatedData = [...this.travelListData]
    updatedData.push(item)
    this.travelListData = [...updatedData]
  }

  @action
  removeTravelListItem(id: string): void {
    const updatedData = this.travelListData.filter((item) => item.id !== id)
    this.travelListData = [...updatedData]
  }

  @action
  clearTravelListData(): void {
    this.travelListData = []
  }

  @action
  changePackedItemValue(isPacked: boolean, id: string): void {
    const currentTravelListData = [...this.travelListData]
    const currenTravelListItem = currentTravelListData.find((item) => item.id === id)
    const currenTravelListItemIndex = currentTravelListData.findIndex((item) => item.id === id)
    if (currenTravelListItem) {
      currenTravelListItem.packed = isPacked
      currentTravelListData[currenTravelListItemIndex] = currenTravelListItem
      this.travelListData = [...currentTravelListData]
    }
  }

  @action
  sortTravelListData(sortValue: TravelType.SortSelect): void {
    switch (sortValue) {
      case 'order':
        const sortedByOrder = this.travelListData.sort((a, b) => a.sortId - b.sortId)
        this.travelListData = [...sortedByOrder]
        break
      case 'description':
        const sortedByDescription = this.travelListData.sort((a, b) => a.description.localeCompare(b.description))
        this.travelListData = [...sortedByDescription]
        break
      case 'quantity':
        const sortedByQuantity = this.travelListData.sort((a, b) => a.quantity - b.quantity)
        this.travelListData = [...sortedByQuantity]
        break
      case 'status':
        const sortedByStatus = this.travelListData.sort((a) => a.packed ? -1 : 1)
        this.travelListData = [...sortedByStatus]
        break
    }
  }

  @computed
  get travelListDataLength(): number {
    return this.travelListData.length
  }
  @computed
  get packedTravelListQuantity(): number {
    const packedItems = this.travelListData.filter(item => item.packed)
    return packedItems.length
  }
  @computed
  get percentageOfPackedItems(): number {
    const length = this.travelListData.length
    const packedItems = this.travelListData.filter(item => item.packed).length
    if (length && packedItems){
      return Math.round((packedItems * 100) / length)
    }
    return 0
  }
}

export const travelStore = new TravelStore()
