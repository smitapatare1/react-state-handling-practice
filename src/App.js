import {useState} from 'react';
function App() {
const [count, setCount]=useState(0);

function increment()
{
  setCount(count+1);
}

  return (
    <>
      <h1>useState</h1>
      <h2>count={count}</h2>
      <h2>second count={count}</h2>
      <button onClick={increment}>Increase Count</button>
    </>
  );
}

export default App;
