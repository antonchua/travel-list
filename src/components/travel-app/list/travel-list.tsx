import styles from './travel-list.module.scss'

export const TravelList = () => {
  return(
    <div className={styles.list}>
      <ul></ul>
      <label htmlFor='sort'>
        <select>
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY DESCRIPTION</option>
          <option>SORT BY PACKED STATUS</option>
        </select>
      </label>
      <button type={'button'}>CLEAR LIST</button>
    </div>
  )
}