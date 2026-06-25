import { useContext } from "react";

export default function Test() {
    const testContext = useContext(CounterConte)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
