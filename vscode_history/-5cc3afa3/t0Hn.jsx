import React, { useState } from 'react'

export default function Comments() {
    const [value, setValue] = useState("")
    
    

  return (
      <div className='card p-5'>
          <input type='text' class="form-control" placeholder='add comment'
              value={value}
              onChange={(e)=>setValue(e.target.value)}
          ></input>
          <div className="comment-text mt-5  card p-5">
              
              <p className='p-5'>{value}</p>
              <button className='btn btn-primary'>send</button>
          </div>
          
    </div>
  )
}
