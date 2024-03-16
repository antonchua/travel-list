import React from 'react'
import { ChangeEvent, useState } from 'react'
import {observer} from 'mobx-react-lite'
import { nanoid } from 'nanoid'
import { travelStore } from '../../stores/travel-store'
import styles from './travel-form.module.scss'

export const TravelForm = observer(() => {
    const [selectQuantity, setSelectQuantity] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const [sortId, setSortId] = useState(1)
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
      setSelectQuantity(+e.target.value)
    }
    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(e.target.value)
    }
    const handleSubmit = (e: React.SyntheticEvent): void => {
      e.preventDefault()
      if (inputValue.trim().length === 0) {
        return
      }
      travelStore.addTravelListItem({
        id: nanoid(),
        packed: false,
        quantity: selectQuantity,
        description: inputValue,
        sortId
      })
      setSortId(prevState => prevState + 1)
      setSelectQuantity(1)
      setInputValue('')
    }
    return (
      <form className={styles.travelForm} onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <label htmlFor='selectQuantity'>
          <select className={styles.travelForm__select} id='selectQuantity' name='selectQuantity' value={selectQuantity}
                  onChange={handleSelect}
          >
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
            onChange={handleInput}
            value={inputValue}
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
)