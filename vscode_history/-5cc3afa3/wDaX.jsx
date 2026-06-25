import React, { useState } from 'react'

export default function Comments() {
    const [value, setValue] = useState("")
    
    

  return (
      <div className='comme'>
          <input type='text' class="form-control" placeholder='add comment'
              value={value}
              onChange={(e)=>setValue(e.target.value)}
          ></input>
          <p>{value}</p>
          <
    </div>
  )
}
