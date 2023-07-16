import React from 'react'
import  '../Style.css'
import { useState } from 'react'


function Main() {
    const[data,setData]=useState("")

    function formData(e)
    {
        console.log(data)
        e.preventDefault()
    }
  return (
    <div className="main">
        

        <div className='abc'>

            <form onSubmit={formData}>
            <input type="text" onChange={(e)=>setData(e.target.value)} />
            <button type="submit">submit</button>

            </form>

           
            




        </div>
        <div className='abc'></div>
        <div className='abc'></div>
        <div className='abc'></div>

    </div>
  )
}

export default Main