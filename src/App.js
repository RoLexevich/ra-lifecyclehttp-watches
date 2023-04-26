import './App.css';
import Form from './components/Form';
import Watch from './components/Watch';
import React, { useState } from 'react';

function App() {

  const [watches, setWatches] = useState([]);
  return (
    <div className="App">
      <Form setWatches={setWatches} />
      <div className="watch-list">
        {watches.map(o => <Watch data={o} key={o.name} setWatches={setWatches}/>)}
      </div>
    </div>
  );
}

export default App;