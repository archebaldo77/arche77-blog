import { useState } from 'react';

import './app.scss';

export const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Hello from React</h2>
      <p className='count'>Count: {count}</p>
      <div className='buttons'>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INC
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          DEC
        </button>
      </div>
    </div>
  );
};
