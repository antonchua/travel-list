import { TravelListItem } from './travel-list-item/travel-list-item'
import { travelStore } from '../../stores/travel-store'
import { TravelType } from '../../stores/travel-type'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import styles from './travel-list.module.scss'

export const TravelList = observer(() => {
  const {SortSelect} = TravelType
  const [selectValue, setSelectValue] = useState<TravelType.SortSelect>(SortSelect.Order)

  useEffect(() => {
    travelStore.sortTravelListData(selectValue)
  }, [selectValue])

  return(
    <div className={styles.travelList}>
      <ul>
        {travelStore.travelListData.map(item => <TravelListItem key={item.id} item={item}/>)}
      </ul>
      <div>
        <label htmlFor='sortList'>
          <select id='sortList' name='sortList'  onChange={(e) => setSelectValue(e.target.value as TravelType.SortSelect)}>
            <option value={SortSelect.Order}>SORT BY INPUT ORDER</option>
            <option value={SortSelect.Description}>SORT BY DESCRIPTION</option>
            <option value={SortSelect.Quantity}>SORT BY QUANTITY</option>
            <option value={SortSelect.Status}>SORT BY PACKED STATUS</option>
          </select>
        </label>
        <button type={'button'} onClick={() => travelStore.clearTravelListData()}>CLEAR LIST</button>
      </div>
    </div>
  )
})