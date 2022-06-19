const initialData={
    counter: 0,
    data:0
}
const CounterReducer=(state=initialData,action)=>{
   
//    using switch 
switch(action.type){
    case "INCREASE":
        return {...state,counter: ++state.counter}
    case "DECREASE":
        return {...state,counter: --state.counter}
    case "RESET":
        return {...state,counter: 0}

    case "INCREASE_DATA":
        return {...state,data: state.data+50}
    default:
        return state
}
   
   
   
   
   
   
   
//    using if else 
    // if(action.type==='INCREASE'){
    //     return{counter: ++state.counter}
    // }
    // else if(action.type==='DECREASE'){
    //     return{counter: --state.counter}
    // }
    // else if(action.type==="RESET"){
    //     return{counter:0}
    // }
    
    // return state
}

export default CounterReducer