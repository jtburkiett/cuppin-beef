import logo from './cupp.png';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="spinning ball of sweet, sweet beef" />
        <h1>
          Ventouse de Boeuf
        </h1>
        <p>
          Gently cuppin' your beef <small>n meats</small>
        </p>
        <a
          className="App-link"
          href="https://cuppinbeef.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please, cup in
        </a>
      </header>
    </div>
  );
}

export default App;
