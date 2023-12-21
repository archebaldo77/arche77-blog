// packages;
import { useState } from "react";

// styles;
import "./counter.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <p className="text">
        Count: <span>{count}</span>
      </p>
      <button
        className="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        inc
      </button>
    </div>
  );
};
