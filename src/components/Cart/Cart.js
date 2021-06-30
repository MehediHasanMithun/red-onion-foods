import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartAction';

const Cart = (props) => {
    console.log(props);
    return (
        <div>
            <h1>This is cart</h1>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps ={
    removeFromCart : removeFromCart
}

export default connect (mapStateToProps,mapDispatchToProps) (Cart);