import { TravelLogo } from './logo/travel-logo'
import { TravelForm } from './form/travel-form'
import { PackingList } from './packing-list/packing-list'
import { TravelStats } from './stats/travel-stats'
import { useEffect, useState } from 'react'
import { SortSelect } from './packing-list/packing-list'
import styles from './travel-list.module.scss'

export type ListItemType = {
  quantity: number
  description: string
  id: number
  packed: boolean
}

export const TravelList = () => {
  const [listItems, setListItems] = useState<ListItemType[]>([])
  const [packedCount, setPackedCount] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const listItemsLength = listItems.length
  const alreadyPacked = (): void => {
    const packedStatus = listItems.filter((item) => item.packed)
    const packedNumber = packedStatus.length
    setPackedCount(packedNumber)
  }
  const calculatePacked = () => {
    if (packedCount > 0 && listItemsLength > 0) {
      const calculate = Math.round((packedCount * 100) / listItemsLength)
      setPercentage(calculate)
    } else {
      setPercentage(0)
    }
  }
  useEffect(() => {
    calculatePacked()
    alreadyPacked()
  }, [listItems])
  useEffect(() => {
    calculatePacked()
  }, [alreadyPacked])
  const getLIstItems = (items: ListItemType) => {
    setListItems([...listItems, items])
  }
  const handleDeleteItem = (id: number): void => {
    const filteredList = listItems.filter((item) => item.id !== id)
    setListItems([...filteredList])
  }
  const handleSort = (sort: string): void => {
    switch (sort) {
      case SortSelect.Order:
        const sortedOrder = listItems.sort((a, b) => a.id - b.id)
        setListItems([...sortedOrder])
        break
      case SortSelect.Description:
        const sortedDescription = listItems.sort((a, b) => a.description.localeCompare(b.description))
        setListItems([...sortedDescription])
        break
      case SortSelect.Status:
        break
    }
  }
  const handleClearList = (): void => {
    setListItems([])
  }

  const setPackedItem = (id: number, packedStatus: boolean): void => {
    const packedItem = listItems.find((item) => item.id === id)
    const packedItemIndex = listItems.findIndex((el) => el.id === id)
    if (packedItem) {
      const updatedItem = { ...packedItem, packed: packedStatus }
      const currentListItems = [...listItems]
      currentListItems[packedItemIndex] = updatedItem
      setListItems([...currentListItems])
    }
    return
  }

  return (
    <div className={styles.travelLayout}>
      <header className={styles.header}>
        <TravelLogo />
      </header>
      <section className={styles.section}>
        <TravelForm getListItems={getLIstItems} />
      </section>
      <main className={styles.main}>
        <PackingList
          listItem={listItems}
          onDeleteItem={handleDeleteItem}
          onHandleSort={handleSort}
          onHandleClearList={handleClearList}
          onSetPackedItem={setPackedItem}
          packedStatus={alreadyPacked}
          calculatePacked={calculatePacked}
        />
      </main>
      <footer className={styles.footer}>
        <TravelStats listItemLength={listItemsLength} alreadyPacked={packedCount} percentage={percentage} />
      </footer>
    </div>
  )
}
