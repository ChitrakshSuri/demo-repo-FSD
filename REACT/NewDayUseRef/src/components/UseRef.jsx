import React, { useRef } from "react";

function UseRef() {
  const ref = useRef(0);
  const b = 7;
  function increment() {
    console.log(ref.current);
    ref.current++;
  }
  return (
    <div>
      <h2>Current count is: {ref.current}</h2>
      <h2>b is: {b}</h2>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default UseRef;
