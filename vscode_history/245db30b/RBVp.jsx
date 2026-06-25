import { useContext } from "react";
import { CounterContext } from "../CounterContext";

export default function Test() {
    const testContext = useContext(CounterContext)
    console.log(x);
    
  return (
    <div>Test</div>
  )
}
