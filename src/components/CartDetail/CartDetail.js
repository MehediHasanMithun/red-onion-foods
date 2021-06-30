import React, { useState } from 'react';
import './CartDetail.css';
import { RiDeleteBin6Line } from "react-icons/ri";
const CartDetail = (props) => {
    //console.log(props, "props");
    const { item, removeFromCart, updateCart } = props;
    const { cartId, food, quantity } = item;
    const [count,setCount] =useState(quantity);
    const handleRemoveButton=()=>{
        console.log(cartId);
        removeFromCart(cartId);
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
                    <h5><span style={{marginLeft:"20px",border:"1px solid lightgray",borderRadius:"15px",padding:"0px 15px"}}><span style={{color:"red",cursor:"pointer"}} onClick={()=>setCount(count-1)}>-</span><span style={{marginRight:"10px",marginLeft:"10px"}}>{count}</span><span  style={{color:"red",cursor:"pointer"}} onClick={()=>setCount(count+1)}>+</span></span></h5>
                    <button onClick={handleRemoveButton}  className="search-btn remove"><RiDeleteBin6Line style={{fontSize:"20px"}}/></button>
                </div>
            </div>
    );
};

export default CartDetail;