import { useContext } from "react";
import CounterProvider from "../CounterContext";

export default function Test() {
    const testContext = useContext(Counter)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
