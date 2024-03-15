import styles from './travel-form.module.scss'
import { useState } from 'react'

export const TravelForm = () => {
  const [selectQuantity, setSelectQuantity] = useState('')
  return (
    <form className={styles.travelForm}>
      <h3>What do you need for your ;-) trip?</h3>
      <label htmlFor='selectQuantity'>
        <select className={styles.travelForm__select} id='selectQuantity' name='selectQuantity' value={selectQuantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </label>
      <label htmlFor='tripItem'>
        <input
          className={styles.travelForm__input}
          id='tripItem'
          type="text"
          placeholder="item..."
        />
      </label>

      <button type={'submit'}>ADD</button>
    </form>
  )
}
