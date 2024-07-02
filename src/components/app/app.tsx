// libraries;
import { useState } from 'react';

// styles;
import classes from './app.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={classes[`app`]}>
      <h1 className={classes[`greeting`]}>Hello world!</h1>
      <p className={classes[`count`]}>{count}</p>
      <div className={classes[`buttons`]}>
        <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
        <button onClick={() => setCount((prev) => prev - 1)}>DEC</button>
      </div>
    </div>
  );
};
