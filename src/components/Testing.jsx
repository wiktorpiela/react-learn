import React, { useState, useReducer } from 'react'
import { useEffect } from 'react'
import {useImmer, useImmerReducer} from 'use-immer';

function Testing() {

  const initialState = {
    appleCount: 1,
    bananaCount: 10,
    message: 'Hello',
    happy: true,
  };

  function ReducerFunction(draft, action){

    switch(action.type){
      case 'addApple':
        draft.appleCount = draft.appleCount+1;
        break

      case 'changeeverything':
        draft.bananaCount = draft.bananaCount+10;
        draft.message = action.customMessage;
        draft.happy = !draft.happy
        break
    }

  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);



  return (
    <div>
      <div>Right now the count of apple is {state.appleCount}</div><br />
      <div>Right now the count of bananas is {state.bananaCount}</div><br />
      <div>Right now the message is {state.message}</div><br />
      {state.happy ? (<h1>Thank you for being happy</h1>) : (<h1>there is no hapinnes</h1>)}
      <button onClick={()=>{dispatch({type: 'addApple'})}}>Add apple</button><br />
      <button onClick={()=>{dispatch({type: 'changeeverything', customMessage:'the message is now coming from distapch'})}}>change everything</button>
    </div>
  )
}

export default Testing
