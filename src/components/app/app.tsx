import { useState } from 'react';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Hello from React</h2>
      <p className={classes.count}>Count: {count}</p>
      <div className={classes.buttons}>
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
