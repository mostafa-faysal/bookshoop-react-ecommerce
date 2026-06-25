import { useContext } from "react";

export default function Test() {
    const testContext = useContext(Counter)
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
