import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart,updateCart } from '../../Redux/Actions/CartAction';
import CartDetail from '../CartDetail/CartDetail';
import Nav from '../NavBar/Nav';
import './Cart.css';

const Cart = (props) => {
   // console.log(props);
    const {cart, removeFromCart,updateCart} = props;
    const [subtotal,setSubtotal] = useState({
        totalPrice:0,
        totalQuantity:0,
        totalPriceWithAll:0,
        tax:0,
        deliveryFee:0
    });
   // console.log(cart);

   const handleSubtotal=()=>{
    const item = cart.length;
    let totalPrice = 0;
    let totalQuantity = 0;
    let tax = 0;
    let deliveryFee = 0;
    for(let i = 0;i<item;i++){
        const element = cart[i].food.price * cart[i].quantity;
        totalPrice = totalPrice + element;
        totalQuantity = totalQuantity+cart[i].quantity;
    }
    if(totalQuantity>0)
     deliveryFee = 5;

    tax = (totalPrice * 5)/100;
    let totalPriceWithAll = totalPrice + tax + deliveryFee;
    const newSubtotal ={...subtotal};
    newSubtotal.totalPrice = totalPrice;
    newSubtotal.totalQuantity = totalQuantity;
    newSubtotal.tax = tax;
    newSubtotal.deliveryFee = deliveryFee;
    newSubtotal.totalPriceWithAll = totalPriceWithAll;
    setSubtotal(newSubtotal);
   }


   useEffect(()=>{
       handleSubtotal();
   },[cart]);

  // console.log(subtotal.totalQuantity," ",subtotal.totalPrice);
    return (
        <div>
            
            <div>
            {
                cart.map(item=><CartDetail key={item.cartId} item={item} handleSubtotal={handleSubtotal} removeFromCart={ removeFromCart} updateCart={updateCart}></CartDetail>)
            }
            </div>
    
            <table className="cart-summary">
                    <tbody>
                        <tr>
                            <td>Subtotal: {subtotal.totalQuantity} items</td>
                            <td>${subtotal.totalPrice.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${subtotal.tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Delivery Fee</td>
                            <td>${subtotal.deliveryFee.toFixed(2)}</td>
                        </tr>
                        <tr className="order-total">
                            <td>Total</td>
                            <td>${subtotal.totalPriceWithAll.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps ={
    removeFromCart : removeFromCart,
    updateCart : updateCart
}

export default connect (mapStateToProps,mapDispatchToProps) (Cart);