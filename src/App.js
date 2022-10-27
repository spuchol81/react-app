import logo from './heart.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="background">
        VMware Tanzu
        <img src={logo} className="App-logo" alt="logo" /> 
        NodeJS
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
