import { observer } from 'mobx-react-lite'
import { travelStore } from '../../stores/travel-store'
import styles from './travel-stats.module.scss'

export const TravelStats = observer(() => {
  const travelListDataLength = travelStore.travelListDataLength
  const packedItems = travelStore.packedTravelListQuantity
  const percentage = travelStore.percentageOfPackedItems
  return(
    <div className={styles.travelStats}>You have {travelListDataLength} item on your list, and you already packed {packedItems} ({percentage}%)</div>
  )
})