import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'
import Counter from './../Counter';


export default function Home() {
    const [count, setCount] =useState(0)
    return (    
<CounterIncrease Counter={count}/>
  )
}
