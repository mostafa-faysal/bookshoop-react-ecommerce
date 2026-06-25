import { useContext } from "react";

export default function Test() {
    const testContext = useContext(counterContext)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
