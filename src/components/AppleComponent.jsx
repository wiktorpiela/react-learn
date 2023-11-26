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

    function Plus(){
        setNumberOfApples(cureentVal => cureentVal+1)
    }

    function Minus(){
        setNumberOfApples(cureentVal => cureentVal-1)
    }

    function TooManyDisplay(){
        if(numberOfApples>10){
            return <h1>John has too many apples</h1>
        } else{
            return ''
        }
    }

  return (
    <>
        <div>
            <h1>{AppleDisplay(numberOfApples)}</h1>
        </div>
        <button onClick={Plus} className='add-btn'>Plus</button>
        <button style={{display: numberOfApples<=0 ? "None" : ""}} onClick={Minus} className='decrease-btn'>Minus</button>
        {/* {TooManyDisplay()} */}
        {numberOfApples > 10 ? <h1>John has too many apples</h1> : ""}
        
    </>
  )
}

export default AppleComponent
