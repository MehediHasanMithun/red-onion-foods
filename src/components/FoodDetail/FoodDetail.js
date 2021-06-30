import React, { useState } from 'react';
import './FoodDetail.css';
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from '../../Redux/Actions/CartAction';
import { connect } from 'react-redux';

const FoodDetail = (props) => {
    const [count,setCount]=useState(0);
    const [disable,setDisable] = useState("disabled");
    const {food,addToCart} = props;
    //console.log("food-details",props);
    const handleAddToCart=()=>{
       addToCart(food,count);
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                       <h1 style={{marginBottom:"30px"}}>{food.name}</h1>
                       <p style={{color:"gray",marginBottom:"30px"}}>{food.description}</p>
                       <h2 style={{marginBottom:"30px"}}>${food.price} <span style={{marginLeft:"20px",border:"1px solid lightgray",borderRadius:"15px",padding:"0px 15px"}}><span style={{color:"red",cursor:"pointer"}} onClick={()=>setCount(count-1)}>-</span><span style={{marginRight:"10px",marginLeft:"10px"}}>{count}</span><span  style={{color:"red",cursor:"pointer"}} onClick={()=>setCount(count+1)}>+</span></span></h2>
                       <button disabled={count>0?"":disable} onClick={handleAddToCart} style={{marginBottom:"30px",backgroundColor: count>0 ?"rgba(224, 18, 18, 0.767)":"gray"}} className="search-btn"><FiShoppingCart style={{fontSize:"20px",marginRight:"10px"}}/>Add</button>
                    </div>
                    <div className="col-6">
                        <img className="food-detail-img" src={food.img} alt="Food" />
                    </div>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state=>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps={
    addToCart : addToCart
}

export default connect (mapStateToProps,mapDispatchToProps) (FoodDetail);