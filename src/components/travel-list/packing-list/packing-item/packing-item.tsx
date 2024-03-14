import { ListItemType } from '../../travel-list'
import { useState } from 'react'
import styles from './packing-item.module.scss'

type PackingItemType = {
  item: ListItemType
  onDeleteItem: (id: number) => void
}
export const PackingItem = ({ item, onDeleteItem }: PackingItemType) => {
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false)
  const handleCheckBox = () => {
    setCheckBoxValue(!checkBoxValue)
  }
  return (
    <li className={styles.listItem}>
      <input type="checkbox" onChange={handleCheckBox} />
      <p className={checkBoxValue ? styles.active : ''}>
        {item.quantity} {item.description}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}
