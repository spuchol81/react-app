import reactlogo from './logo.svg';
import logo from './heart-svgrepo-com.svg';
import Tanzulogo from './logo-vmware.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="background">
      <div className="App-header"><img className="App" src={Tanzulogo} alt="Tanzulogo" /> + <img  className="React-logo" src={reactlogo} alt="reactlogo" width="30%" height="30%"/> = <img src={logo} className="App-logo" alt="logo" /></div>
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
