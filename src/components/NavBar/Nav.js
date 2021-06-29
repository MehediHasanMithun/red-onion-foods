import React from 'react';
import './Nav.css';
import { FiShoppingCart } from "react-icons/fi";
import logo from './../../Images/logo2.png';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="Nav">
              <div>
                 <img src={logo} alt="Logo" />
              </div> 
                <Link to="/cart" className="cart-icon">
                  <FiShoppingCart style={{fontSize:'25px'}}></FiShoppingCart>
                </Link>
            
                <Link to="/login" className="login-btn">Login</Link>
           
                <Link to="/signup" className="signup-btn">Sign up</Link>
            

        </div>
    );
};

export default Nav;