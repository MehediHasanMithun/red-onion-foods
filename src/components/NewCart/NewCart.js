import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Nav from '../NavBar/Nav';
import './NewCart.css';
const NewCart = (props) => {
    const {cart} = props;
    return (
        <div>
            <Nav></Nav>
            <div className="new-cart">
              <Cart></Cart>

              <Link to="/checkout"  style={{pointerEvents: cart.length>0 ? "" :"none", width:"340px", marginLeft:"30px",marginBottom: "30px",textDecoration:"none", backgroundColor: cart.length > 0 ? "rgba(224, 18, 18, 0.767)" : "gray" }} className="btn btn-danger">Checkout Your Food</Link>

            </div>
        </div>
    );
};
const mapStateToProps =state=>{
    return{
        cart: state.cart
    }
}
export default connect (mapStateToProps) (NewCart);