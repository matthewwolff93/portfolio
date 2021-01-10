import styles from './index.module.scss';
import Wolf from '../images/wolf';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Wolf className={styles.logo} />
    </header>
  );
}