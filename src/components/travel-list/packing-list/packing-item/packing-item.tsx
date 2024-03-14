import { ListItemType } from '../../travel-list'
import { useEffect, useState } from 'react'
import styles from './packing-item.module.scss'

type PackingItemType = {
  item: ListItemType
  onDeleteItem: (id: number) => void
  onSetPackedItem(id: number, packedStatus: boolean): void
  packedStatus(): void
  calculatePacked(): void
}
export const PackingItem = ({ item, onDeleteItem, onSetPackedItem}: PackingItemType) => {
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false)
  const handleCheckBox = () => {
    setCheckBoxValue(!checkBoxValue)
  }
  useEffect(() => {
    onSetPackedItem(item.id, checkBoxValue)
  }, [checkBoxValue])
  return (
    <li className={styles.listItem}>
      <input type="checkbox" onChange={() => {
        handleCheckBox()
      }} />
      <p className={checkBoxValue ? styles.active : ''}>
        {item.quantity} {item.description}
      </p>
      <button onClick={() => {onDeleteItem(item.id)
      }}>&times;</button>
    </li>
  )
}
