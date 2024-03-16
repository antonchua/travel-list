import { TravelLogo } from './components/logo/travel-logo'
import { TravelForm } from './components/form/travel-form'
import { TravelList } from './components/list/travel-list'
import { TravelStats } from './components/stats/travel-stats'
import { observer } from 'mobx-react-lite'
import styles from './app.module.scss'

const App = observer(() => {
  return (
    <div className={styles.wrapper}>
      <header>
        <TravelLogo />
      </header>
      <section>
        <TravelForm/>
      </section>
      <main >
        <TravelList />
      </main>
      <footer >
        <TravelStats/>
      </footer>
    </div>
  )
})
export default App
