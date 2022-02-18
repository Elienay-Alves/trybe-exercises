import logo from './logo.svg';
import './App.css';

const Task =(value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const list = ['correr', 'manter a sanidade', 'fingir que sou normal'];

function App() {
  return (
    list.map(lister => Task(lister))
  );
}

export default App;
