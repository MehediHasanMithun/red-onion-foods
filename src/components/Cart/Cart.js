import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart,updateCart } from '../../Redux/Actions/CartAction';
import CartDetail from '../CartDetail/CartDetail';
import './Cart.css';

const Cart = (props) => {
   // console.log(props);
    const {cart,removeFromCart,updateCart} = props;
   // console.log(cart);
    return (
        <div>
             <h2 className="cart-heading">Total Item Added : {cart.length}</h2>
            {
                cart.map(item=><CartDetail key={item.cartId} item={item} removeFromCart={removeFromCart} updateCart={updateCart}></CartDetail>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps ={
    removeFromCart : removeFromCart}

export default connect (mapStateToProps,mapDispatchToProps) (Cart);