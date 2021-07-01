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
            //console.log(action.payload.cartId,"from reducer");
            const newCart = state.cart.filter(item => item.cartId !== action.payload.cartId);
            //console.log(newCart,action.cartId);
            return {
                cart: newCart
            }

        case UPDATE_CART:
            const updatedItem = state.cart.filter(item=>item.cartId===action.payload.cartId);
            const updatedItemObj = updatedItem[0];
            updatedItemObj.quantity = action.payload.quantity;
            return state;

        default:
            return state;
    }
}
export default cartReducer;