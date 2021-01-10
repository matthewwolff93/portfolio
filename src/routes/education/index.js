import styles from './index.module.scss';

export default function Education() {
  return (
    <div className={styles.wrapper}>
      <h2>
        <a href="https://www.massey.ac.nz/" target="_blank" rel="noreferrer noopener">Massey University</a>
      </h2>
      <i>February 2012 - November 2014</i>
      <b>Bachelor of Information Sciences majoring in Software Engineering</b>
    </div>
  );
}
