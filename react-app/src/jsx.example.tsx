import React, { createElement as e, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // return (
  //   <h1>Hello React12345</h1>
  // );

  // return e('h1', {}, 'Hello From JS')
  return e('div', { className: 'container' }, [
    e('h1', { className: 'font-bold', key: '1' }, `Test JSX ${count}`),
    // e('button', { className: 'py-2 px-4 border', key: '2', onClick: () => console.log('Clicked!') }, 'Click me')
    e('button', { className: 'py-2 px-4 border', key: '2', onClick: () => setCount(count + 1) }, 'Click me')

  ])
}

export default App;
