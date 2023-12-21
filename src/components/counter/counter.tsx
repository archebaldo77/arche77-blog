// packages;
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        inc
      </button>
    </div>
  );
};
