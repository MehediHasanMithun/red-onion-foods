import { ADD_TO_CART, REMOVE_FR0M_CART, UPDATE_CART } from '../Actions/CartAction';
const initialState = {
    cart: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                food: action.payload.product,
                quantity: action.payload.quantity,
                cartId: state.cart.length + 1
            }
            return {
                cart: [...state.cart, newItem]
            }
        case REMOVE_FR0M_CART:
            const newCart = state.cart.filter(item => item.cartId !== action.payload.cartId);
            console.log(newCart);
            return {
                cart: newCart
            }
        case UPDATE_CART:
            const updatedItem = state.cart.map(item=>item.cartId===action.payload.cartId);
             updatedItem.quantity = action.payload.quantity;
            
            return{
                cart:[...state.cart,updatedItem]
            }
        default:
            return state;
    }
}
export default cartReducer;