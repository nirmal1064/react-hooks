import { useState } from "react";

type CounterType = [
  count: number,
  {
    increment: (value?: number) => void;
    decrement: (value?: number) => void;
    reset: (value?: number) => void;
  }
];

const useCounter = (initialValue = 0): CounterType => {
  const [count, setCount] = useState(initialValue);
  function increment(value = 1) {
    setCount((prevCount) => prevCount + value);
  }
  function decrement(value = 1) {
    setCount((prevCount) => prevCount - value);
  }
  function reset(value = initialValue) {
    setCount(value);
  }
  return [count, { increment, decrement, reset }];
};

export default useCounter;
