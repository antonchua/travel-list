import styles from './steps.module.scss'
import cx from 'classnames'
import { useState } from 'react'

export const Steps = () => {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const messages: string[] = ['First message!!!', 'Second message!!!', 'Third message!!!']

  const onNextHandler = (): void => {
    if (step < 3) setStep(step + 1)
  }

  const onPreviousHandler = (): void => {
    if (step > 1) setStep(step - 1)
  }

  const handleCloseBtn = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className={styles.closeBtn} onClick={handleCloseBtn}>&times;</button>
      {isOpen && <div className={styles.wrapper}>
        <div className={styles.steps}>
          <div className={cx(styles.steps__numbers, { [styles.active]: step >= 1  })}>1</div>
          <div className={cx(styles.steps__numbers, { [styles.active]: step >= 2 })}>2</div>
          <div className={cx(styles.steps__numbers, { [styles.active]: step >= 3 })}>3</div>
        </div>
        <div className={styles.message}>[Step: {step}] {messages[step - 1]}</div>
        <div className={styles.stepsButtons}>
          <button type={'button'} onClick={onPreviousHandler} className={styles.stepsButtons__btn}>
            Previous
          </button>
          <button type={'button'} onClick={onNextHandler} className={styles.stepsButtons__btn}>
            Next
          </button>
        </div>
      </div>}
    </>

  )
}
