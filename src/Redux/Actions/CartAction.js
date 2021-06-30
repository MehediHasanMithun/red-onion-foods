export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FR0M_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const addToCart = (product,quantity) => {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity }
    }
}
export const removeFromCart = (CartId) => {
    return {
        type: REMOVE_FR0M_CART,
        payload: { CartId }
    }
}

export const updateCart = (CartId,quantity)=>{
    return{
        type:UPDATE_CART,
        payload:{ CartId , quantity}
    }
}