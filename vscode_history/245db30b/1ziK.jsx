import { useContext } from "react";

export default function Test() {
    const testContext = useContext(CounterContex)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
