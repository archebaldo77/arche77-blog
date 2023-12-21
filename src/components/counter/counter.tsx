// packages;
import { useState } from "react";

// styles;
import cls from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={cls.counter}>
      <p className={cls.text}>
        Count: <span>{count}</span>
      </p>
      <button
        className={cls.button}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        inc
      </button>
    </div>
  );
};
