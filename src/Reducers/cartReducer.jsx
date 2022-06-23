const initialData={
    cart_items: ''
}

const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {cart_items:[...state.cart_items,action.payload]}
    }
    return state
}

export default cartReducer