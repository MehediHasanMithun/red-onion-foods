export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FR0M_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const addToCart = (product,quantity) => {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity }
    }
}
export const removeFromCart = cartId => {
    //console.log(cartId, "from action");
    return {
        type: REMOVE_FR0M_CART,
        payload:{ cartId }
    }
}

export const updateCart = (cartId,quantity)=>{
    return{
        type:UPDATE_CART,
        payload:{ cartId , quantity}
    }
}