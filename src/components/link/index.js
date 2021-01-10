import {NavLink} from 'react-router-dom';

import styles from './index.module.scss';

export default function Link({to, exact, children}) {
  return (
    <NavLink className={styles.link} activeClassName={styles.active} to={to} exact={exact}>{children}</NavLink>
  );
}
