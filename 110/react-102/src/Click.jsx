import { useState } from "react";

export default function Counter() {
  // const counter = 0;
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1)
  };

  return (
    <>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>

      <button onClick={handleClick}> ClickMe</button>
    </>
  );
}
