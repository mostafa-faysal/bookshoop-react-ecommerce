import { useContext } from "react";

export default function Test() {
    const testContext = useContext()
    console.log(testContext);
    
  return (
    <div>Test</div>
  )
}
