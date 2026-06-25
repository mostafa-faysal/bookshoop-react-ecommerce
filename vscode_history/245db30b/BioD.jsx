import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Test() {
  const { state, dispatch } = useContext(CounterContext);
  const { count } = state;

  return (
    <div>
      <h1>Test - Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

