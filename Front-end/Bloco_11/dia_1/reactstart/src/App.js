import logo from './logo.svg';
import './App.css';

function App() {
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
task('Hello world!')
const array = ['Estudar React', 'Contactar UBC', 'Atualizar GitHub']
return array.map((listItem) => task(listItem))
}

export default App;
