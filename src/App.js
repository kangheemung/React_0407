import React, { useState } from 'react';
import EffectFunction from './components/EffectFunction';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="App">
      <h1>ここはアップです。</h1>
      <p>{`${count} 回クリックされました`}</p>
      <EffectFunction count={count} setCount={updateCount} />
    </div>
  );
}

export default App;
