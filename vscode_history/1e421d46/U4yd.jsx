import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'    


export default function Home() {
    const [counter, SetCounter] = useState(0)
    console.log(counter);
    return ( 
<>    
        <Counter />
        <CounterIncrease Counter={counter} />
        </>
  )
}
