import { TravelList } from './components/travel-list/travel-list'
import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <TravelList/>
    </div>

  )
}
export default App
