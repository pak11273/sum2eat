import React from 'react';
import sum2eat from './public/assets/images/sum2eat-cover.jpg'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sum2eat} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./order"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now!
        </a>
      </header>
    </div>
  );
}

export default App;
