import { useEffect, useState } from 'react'
import { travelStore } from '../../../stores/travel-store'
import { TravelType } from '../../../stores/travel-type'
import { observer } from 'mobx-react-lite'
import styles from './travel-list-item.module.scss'

type TravelListItemType = {
  item: TravelType.ListItemType
}

export const TravelListItem = observer(({item}: TravelListItemType) => {
  const [isChecked, setIsChecked] = useState(false)
  useEffect(() => {
    travelStore.changePackedItemValue(isChecked, item.id)
  }, [isChecked])
  return (
    <li className={styles.listItem}>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      <p className={isChecked ? styles.active : ''}>{item.quantity} {item.description}</p>
      <button onClick={() => travelStore.removeTravelListItem(item.id)}>&times;</button>
    </li>
  )
})
