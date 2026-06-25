import React, { useState } from 'react'
import CounterIncrease from '../CounterIncrease'
import Counter from './../Counter';



export default function Home() {
    console.log(counter);
    return ( 
<>    
        <Counter />
        <CounterIncrease Counter={counter} />
        </>
  )
}
