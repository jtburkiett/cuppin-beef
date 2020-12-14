import logo from './cupp.png';
import './App.css';
import Beef from './animated-beef';
import Link from 'react-router';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Beef />
        <h1>
          Ventouse de Boeuf
        </h1>
        <p>
          Gently cuppin' your beef <small>n meats</small>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please, cup in
        </a>
        <Link to="./PreCup">Click me</Link>
      </header>
    </div>

  );
}

export default App;
