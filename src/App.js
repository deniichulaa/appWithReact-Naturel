import logo from './logoHblanco.png';
import './App.css';
import navBar from'./components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <navBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HAZ lo Tuyo Sublimaciones
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          HAZloTuyo
        </a>
      </header>
    </div>
  );
}

export default App;
