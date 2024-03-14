import React, { useId } from 'react'
import { ChangeEvent, useState } from 'react'
import { ListItemType } from '../travel-list'
import styles from './travel-form.module.scss'

type TravelFormType = {
  getListItems: (item: ListItemType) => void
}

export const TravelForm = ({getListItems}: TravelFormType) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [description, setDescription] = useState('')
  const [id, setId] = useState(1)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setQuantity(+e.target.value)
  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value)
  }
  const handleButton = (e: React.SyntheticEvent) => {
    e.preventDefault()
    getListItems({quantity, description, id, packed: false})
    setId(prevState => prevState + 1)
    setQuantity(1)
    setDescription('')
  }

  return (
    <form className={styles.addForm}>
      <h3>What do you need for your ;-) trip?</h3>
      <select value={quantity} onChange={handleSelect}>
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
      <input
        className={styles.travelForm__input}
        type="text"
        placeholder="item..."
        value={description}
        onChange={handleInput}
      />
      <button type={'submit'} onClick={handleButton}>ADD</button>
    </form>
  )
}
