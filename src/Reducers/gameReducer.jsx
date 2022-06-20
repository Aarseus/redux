const initialData={ 
     gameName:'',
     playerName: ''
}
const gameReducer=(state= initialData,action)=>{
    switch(action.type){
        case 'UPDATE_GAME':
            return {...state,gameName: action.payload,playerName:action.new}

        default: return state
    }
}

export default gameReducer