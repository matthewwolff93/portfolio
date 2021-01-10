import styles from './index.module.scss';

export default function Employment() {
  return (
    <div className={styles.wrapper}>
      <h2>
        <a href="https://battlefy.com" target="_blank" rel="noreferrer noopener">Battlefy Inc.</a>
      </h2>
      <i>July 2018 - Present</i>
      <b>Tech Lead</b>
      <p>Battlefy is an esports tournament platform focused on providing web services to both organize and compete in tournaments for a variety of games around the world. My responsibilities at Battlefy include:</p>
      <ul>
        <li>writing code (full stack)</li>
        <li>leading development teams</li>
        <li>unit and manual testing</li>
        <li>managing other developers</li>
        <li>writing requirements</li>
        <li>contributing to good company culture</li>
        <li>deploying services</li>
        <li>interviewing developer candidates.</li>
        <li>managing infrastructure</li>
      </ul>
      <hr />
      <h2>
        <a href="https://datacom.com/nz/en/" target="_blank" rel="noreferrer noopener">Datacom Systems Ltd.</a>
      </h2>
      <i>February 2015 - June 2018</i>
      <b>Software Developer</b>
      <p>Datacom is the leading IT service provider in New Zealand. During my time there I worked for multiple clients in a variety of roles. The longest of which was at ASB Bank as a software developer in a small agile team. I worked primarily with ReactJS to build out customer facing pages to facilitate lending applications, while also building .NET APIs to fetch and update data.</p>
    </div>
  );
}
