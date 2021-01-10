import styles from './index.module.scss';
import image from '../../assets/golden-gate.jpg'

export default function Hero() {
  return (
    <img className={styles.hero} src={image} alt='golden gate bridge' />
  );
}
