import React, { useState } from 'react';
import './CartDetail.css';
import { RiDeleteBin6Line } from "react-icons/ri";
const CartDetail = (props) => {
   // console.log("cart details",props);
    const { item,  removeFromCart, updateCart,handleSubtotal} = props;
    const { cartId, food, quantity } = item;
    const [count,setCount] = useState(quantity);
    const [flag,setFlag] = useState(false);

    const handleRemove = ()=>{
        removeFromCart(cartId);
        handleSubtotal();
    }
    
    const handleCountChange = () =>{
        updateCart(cartId,count);
        setFlag(false);
        handleSubtotal();
    }

    if(flag){
    handleCountChange();
}
    const handleDecrement=()=>{
        setCount(count-1);
        setFlag(true);
    }
    const handleIncrement=()=>{
        setCount(count+1);
        setFlag(true);
    }
   
    return (
        <div className="cart-detail">
                <div className="col-4">
                  <img className="cart-img" src={food.img} alt="Food" />
                </div>
                <div className="name-detail col-4">
                    <h6>{food.name}</h6>
                    <h5 style={{color:"red",marginTop:"30px"}}>${food.price}</h5>
                </div>
                <div className="counter-detail col-4">
                    <h5><span style={{marginLeft:"20px",border:"1px solid lightgray",borderRadius:"15px",padding:"0px 15px"}}><span style={{color:"red",cursor:"pointer"}} onClick={handleDecrement}>-</span><span style={{marginRight:"10px",marginLeft:"10px"}}>{count}</span><span  style={{color:"red",cursor:"pointer"}} onClick={handleIncrement}>+</span></span></h5>
                    <button onClick={handleRemove}  className="search-btn remove"><RiDeleteBin6Line style={{fontSize:"20px"}}/></button>
                </div>
            </div>
    );
};

export default CartDetail;