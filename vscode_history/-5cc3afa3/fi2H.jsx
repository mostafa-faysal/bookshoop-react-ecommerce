import React, { useState } from 'react'

export default function Comments() {
    const [value, setValue] = useState("")
    
    

  return (
      <div className='card p-5 w-50'>
          <input type='text' className="form-control" placeholder='add comment...'
              value={value}
              onChange={(e)=>setValue(e.target.value)}
          ></input>
          <div className="comment-text mt-5 card">
              
              <p className='p-2 pb-2 pt-4'>{value}</p>
          </div>
          <button className='btn btn-primary mt-5'
              onClick={() => {
             setValue("")
          }}
          >send</button>
          
    </div>
  )
}
