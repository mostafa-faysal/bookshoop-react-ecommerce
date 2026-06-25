import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Test() {
    const testContext = useContext(CounterContext)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
