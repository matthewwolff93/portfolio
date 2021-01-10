export default function Skills() {
  return (
    <div>
      <ul>
        {keyTech.map(({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

const keyTech = [
  {name: 'JavaScript (ES2019)'},
  {name: 'ReactJS (17)'}
];
