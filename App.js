import React, { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('Hello, world!');

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <button onClick={() => setGreeting('Hello, React!')}>
        Change Greeting
      </button>
    </div>
  );
}

export default App;
