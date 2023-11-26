import React, {useState} from 'react'

function AppleComponent() {

    const [numberOfApples, setNumberOfApples] = useState(0)

    function AppleDisplay(numberOfApples){
        if(numberOfApples === 0 || numberOfApples ===1){
            return `John has ${numberOfApples} apple`
        } else if(numberOfApples>1){
            return `John has ${numberOfApples} apples`
        } else {
            return `John owes us ${Math.abs(numberOfApples)} apples`
        }
    }

  return (
    <>
        <div>
            <h1>{AppleDisplay(numberOfApples)}</h1>
        </div>
        <button onClick={()=> setNumberOfApples(cureentVal => cureentVal+1)} className='add-btn'>Plus</button>
        <button onClick={()=> setNumberOfApples(cureentVal => cureentVal-1)} className='decrease-btn'>Minus</button>
    </>
  )
}

export default AppleComponent
