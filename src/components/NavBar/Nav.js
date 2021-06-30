import React from 'react';
import './Nav.css';
import { FiShoppingCart } from "react-icons/fi";
import logo from './../../Images/logo2.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Nav = (props) => {
  const {cart} = props;
  //console.log("cart",cart);
  //console.log(cart.length);
    return (
        <div className="Nav">
              <div>
                 <img src={logo} alt="Logo" />
              </div> 
                <Link to="/cart" className="cart-icon">
                  <FiShoppingCart style={{fontSize:'25px'}}></FiShoppingCart><span className="product-count">{cart.length}</span>
                </Link>
            
                <Link to="/login" className="login-btn">Login</Link>
           
                <Link to="/signup" className="signup-btn">Sign up</Link>
            

        </div>
    );
};

const mapStateToProps = state=>{
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps) (Nav);