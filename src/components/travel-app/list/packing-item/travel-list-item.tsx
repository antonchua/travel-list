import styles from './travel-list-item.module.scss'

export const TravelListItem = () => {
  return (
    <li className={styles.listItem}>
      <input type="checkbox" />
      <p></p>
      <button>&times;</button>
    </li>
  )
}
