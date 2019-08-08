import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import consequence from './sportsball';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <Dashboard
        balls={balls}
        strikes={strikes}
        update={consequence({setBalls, setStrikes})}
      />
      <Display balls={balls} strikes={strikes} />
    </div>
  );
}

export default App;
