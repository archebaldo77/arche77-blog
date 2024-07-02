// libraries;
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='app'>
      <h1 className='greeting'>Hello world!</h1>
      <p className='count'>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
      <button onClick={() => setCount((prev) => prev - 1)}>DEC</button>
    </div>
  );
};
