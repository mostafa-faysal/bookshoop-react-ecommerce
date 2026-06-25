import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Counter() {
  const { state } = useContext(CounterContext);
  const { count } = state;

  return (
    <div>Counter: {count}</div>
  );
}

