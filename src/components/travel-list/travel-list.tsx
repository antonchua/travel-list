import { TravelLogo } from './logo/travel-logo'
import { TravelForm } from './form/travel-form'
import { PackingList } from './packing-list/packing-list'
import { TravelStats } from './stats/travel-stats'
import { useState } from 'react'
import { SortSelect } from './packing-list/packing-list'
import styles from './travel-list.module.scss'

export type ListItemType = {
  quantity: number
  description: string
  id: number
}

export const TravelList = () => {
  const [listItems, setListItems] = useState<ListItemType[]>([])
  const listItemsLength = listItems.length
  const getLIstItems = (items: ListItemType) => {
    setListItems([...listItems, items])
  }
  const handleDeleteItem = (id: number): void => {
    const filteredList = listItems.filter(item => item.id !== id)
    setListItems([...filteredList])
  }
  const handleSort = (sort: string): void => {
    switch (sort) {
      case SortSelect.Order:
        const sortedOrder = listItems.sort((a, b) =>  a.id - b.id)
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
  return (
    <div className={styles.travelLayout}>
      <header className={styles.header}>
        <TravelLogo/>
      </header>
      <section className={styles.section}>
        <TravelForm getListItems={getLIstItems}/>
      </section>
      <main className={styles.main}>
        <PackingList listItem={listItems} onDeleteItem={handleDeleteItem} onHandleSort={handleSort} onHandleClearList={handleClearList}/>
      </main>
      <footer className={styles.footer}>
        <TravelStats listItemLength={listItemsLength}/>
      </footer>
    </div>
)
}
