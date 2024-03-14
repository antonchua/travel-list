import { ListItemType } from '../travel-list'
import { PackingItem } from './packing-item/packing-item'
import styles from './packing-list.module.scss'
import { ChangeEvent, useEffect, useState } from 'react'

type PackingListType = {
  listItem: ListItemType[]
  onDeleteItem: (id: number) => void
  onHandleSort: (item: string) => void
  onHandleClearList: () => void
  onSetPackedItem(id: number, packedStatus: boolean): void
  packedStatus(): void
  calculatePacked(): void
}
export enum SortSelect  {
  Order = 'order',
  Description =  'description',
  Status = 'status'
}

export const PackingList = ({listItem, onDeleteItem, onHandleClearList, onHandleSort, onSetPackedItem, packedStatus, calculatePacked}: PackingListType) => {
  const [sortValue, setSortValue] = useState<string>(SortSelect.Order)
  useEffect(() => {
    onHandleSort(sortValue)
  },[sortValue])
  const handleSortValue = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectValue = e.target.value
    setSortValue(selectValue)
  }

  return(
    <div className={styles.list}>
      <ul>{
        listItem.map(item => <PackingItem key={item.id} item={item} onDeleteItem={onDeleteItem} onSetPackedItem={onSetPackedItem} packedStatus={packedStatus}
                                          calculatePacked={calculatePacked}
        />)
      }</ul>
      <label htmlFor='sort'>
        <select name='sort' id='sort' value={sortValue} onChange={handleSortValue}>
          <option value={SortSelect.Order}>SORT BY INPUT ORDER</option>
          <option value={SortSelect.Description}>SORT BY DESCRIPTION</option>
          <option value={SortSelect.Status}>SORT BY PACKED STATUS</option>
        </select>
      </label>
      <button type={'button'} onClick={onHandleClearList}>CLEAR LIST</button>
    </div>
  )
}