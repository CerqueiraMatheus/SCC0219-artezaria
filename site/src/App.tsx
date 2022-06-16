import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './presentation/components/Navigation/Footer';
import Header from './presentation/components/Navigation/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to deliver a project in 3 days!
        </a>
      </header>
      <Footer></Footer>
    </div >
  );
}

export default App;
