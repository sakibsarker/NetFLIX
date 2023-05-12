import Image from 'next/image'
import React, { useCallback, useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(6);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
