import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
const Counter = () => {
    const counterStore= useSelector(store=>store)
  //to access store/reducer


  const dispatch=useDispatch()
  //TO UPDATE STORE/REDUCER, CREATES ACTION
  
  
  
    return (
    <>
      <h1>Count: {counterStore.counter}</h1>
      <h1>Data: {counterStore.data}</h1>
    <button className="btn btn-warning mx-1" onClick={()=>dispatch({type:"INCREASE"})}>Increase Count</button>
    
    <button className="btn btn-danger mx-1" onClick={()=>dispatch({type:"DECREASE"})}>Decrease Count</button>
    
    <button className="btn btn-secondary mx-1" onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    
    <button className="btn btn-primary mx-1" onClick={()=>dispatch({type:'INCREASE_DATA'})}>Increase Data</button>
    
    </>
  )
}

export default Counter
