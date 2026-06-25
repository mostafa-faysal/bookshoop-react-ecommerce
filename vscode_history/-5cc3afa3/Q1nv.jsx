import React, { useState } from 'react'

export default function Comments() {
    const [value, setValue] = useState("")
    
    

  return (
      <div className='card p-5'>
          <input type='text' class="form-control" placeholder='add comment'
              value={value}
              onChange={(e)=>setValue(e.target.value)}
          ></input>
          <p className='mt-5 mx-2 card p-5'>{value}</p>
          
    </div>
  )
}
