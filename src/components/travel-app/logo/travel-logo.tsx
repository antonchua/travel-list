import tourismLogo from '../../../assets/Tourism logo.png'
import travelPlane from '../../../assets/travel-plane.webp'
import styles from './travel-logo.module.scss'

export const TravelLogo = () => {
  return (
    <div className={styles.logo}>
      <img src={tourismLogo} alt='tourism-logo' />
      <h1>FAR AWAY</h1>
      <img src={travelPlane} alt='travel-plane-logo' />
    </div>
  )
}