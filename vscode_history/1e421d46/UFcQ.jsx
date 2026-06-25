import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'
import Counter from './../Counter';


export default function Home() {
    const [counter, SetCounter] = useState(0)
    
    console.log(counter);
    return ( 
<>    
        <CounterIncrease Counter={counter} />
        </>
  )
}
