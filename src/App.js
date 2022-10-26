import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 0) {
      setCounter(counter=0);
    }
  }, [counter])

  return (
    <div className="App">
      <button type="button" onClick={() => setCounter(++counter)}>Increase</button>
      <br></br>
      <br></br>
      <button type="button" onClick={() => setCounter(--counter)}>Decrease</button>
      <br></br>
      <br></br>
      <h1 className='counter'>{counter}</h1>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
