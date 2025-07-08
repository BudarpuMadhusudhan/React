import React, { useReducer } from 'react'
let initialState={count:0}

function reducer(state,action) {
    switch (action.type) {
        case "INCRE":
            return{count: state.count+1};
      case "DECRE":
            return {count: state.count-1}
        default:
            return state;
    }
    
}


export default function ReducerHook() {
    const [state, dispatch]= useReducer( reducer, initialState)
  return (
    <div>
      <p> Count : {state.count}</p>
      <button onClick={()=>{dispatch({type: 'INCRE'})}}>+</button>
      <button onClick={()=>{dispatch({type: 'DECRE'})}}>-</button>
    </div>
  )
}
