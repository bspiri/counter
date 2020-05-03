import React, { useState } from "react";
const int = 0;
function Counter() {
  const [count, setCount] = useState(int);

  return (
    <div>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
