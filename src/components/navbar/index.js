import Link from '../link';
import styles from './index.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <Link exact to='/'>Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/employment'>Employment history</Link>
      <Link to='/education'>Education</Link>
      <Link to='/community'>Community</Link>
    </nav>
  );
}
