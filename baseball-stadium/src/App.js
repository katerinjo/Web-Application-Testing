import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <Dashboard />
      <Display balls={balls} strikes={strikes} />
    </div>
  );
}

export default App;
