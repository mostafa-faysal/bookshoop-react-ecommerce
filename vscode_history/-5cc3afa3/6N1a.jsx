import React, { useState } from 'react'

export default function Comments() {
    const [value, setValue] = useState("")
    
    

  return (
      <div>
          <input type='text' class="form-control" placeholder='add comment'
              value={value}
              onChange={setValue()}
          ></input>
          <p></p>
    </div>
  )
}
