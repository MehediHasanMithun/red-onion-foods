import React from 'react';
import './Nav.css';
import { FiShoppingCart } from "react-icons/fi";
import logo from './../../Images/logo2.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useContext } from 'react';
import { userInfoContext } from '../../App';
import SignOut from '../SignOut/SignOut';
import ProfileMenu from '../ProfileManager/ProfileMenu';
const Nav = (props) => {
 const [userInfo,] = useContext(userInfoContext);
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
            
              {
                userInfo.isSignIn?<SignOut/>: <Link to="/login" className="login-btn btn btn-outline-danger">Sign in</Link>
              } 
          
              {
                userInfo.isSignIn? <ProfileMenu></ProfileMenu> : <Link to="/signup" className="signup-btn">Sign up</Link>
              }  
            
        </div>
    );
};

const mapStateToProps = state=>{
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps) (Nav);