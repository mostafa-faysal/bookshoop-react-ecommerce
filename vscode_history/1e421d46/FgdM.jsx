import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'
import Counter from './../Counter';


export default function Home() {
    const [c ounter,SetCounter] = useState(0)
    return (    
<CounterIncrease Counter={counter}/>
  )
}
