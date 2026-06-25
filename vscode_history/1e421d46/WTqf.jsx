import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'
import Counter from './../Counter';


export default function Home() {
    const [counter, setCounter] = useState(0)
    return ( 
<>    
        <Counter />
        <CounterIncrease Counter={counter} />
        </>
  )
}
