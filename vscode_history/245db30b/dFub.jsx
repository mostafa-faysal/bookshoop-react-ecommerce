import { useContext } from "react";

export default function Test() {
    const testContext = useContext(CounterContext)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
