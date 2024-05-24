import { memo, useState } from "react";

const Counter = memo(() => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => setCount((count) => count + 1);

  console.log("rendering Counter component...");

  return (
    <div className="card">
      <h1>Counter 2</h1>
      <button onClick={onButtonClick}>count is {count}</button>
    </div>
  );
});

export default Counter;
