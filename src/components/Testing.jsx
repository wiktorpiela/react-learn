import React, { useState } from 'react'
import { useEffect } from 'react'

function Testing() {

    const [count, setCount] = useState(1)

    // useEffect(()=>{
    //     console.log('this is a first useeffect')
    // },[])

    useEffect(()=>{
        console.log(`current count is ${count}`)
    },[count])

    function IncreaseCount(){
        setCount(currentVal=>currentVal+1)
    }

    function DecreaseCount(){
        setCount(currentVal=>currentVal-1)
    }

  return (
    <div>
        <h1>current count is {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <br />
      <button onClick={DecreaseCount}>Decrease</button>

    </div>
  )
}

export default Testing
