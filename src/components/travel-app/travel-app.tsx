import { TravelLogo } from './logo/travel-logo'
import { TravelForm } from './form/travel-form'
import { TravelList } from './list/travel-list'
import { TravelStats } from './stats/travel-stats'
import styles from './travel-app.module.scss'


export const TravelApp = () => {

  return (
    <div className={styles.travelLayout}>
      <header className={styles.header}>
        <TravelLogo />
      </header>
      <section className={styles.section}>
        <TravelForm/>
      </section>
      <main className={styles.main}>
        <TravelList />
      </main>
      <footer className={styles.footer}>
        <TravelStats/>
      </footer>
    </div>
  )
}
