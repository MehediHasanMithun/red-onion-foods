import React, { useContext } from 'react';
import { foodDetailContext } from '../../App';
import './Food.css';
const Food = (props) => {
    const [foodDetail,setFoodDetail]=useContext(foodDetailContext);
    //console.log(props);
    const {food} = props;
    const handleFoodItem=()=>{
        // console.log(food.id); 
         setFoodDetail(food); 
    }
    return (
        <div onClick={handleFoodItem} className="food-item">
            <img src={food.img} alt="Food" />
            <h6>{food.name}</h6>
            <p style={{color:"gray"}}>{food.shortDescription}</p>
            <h4>${food.price}</h4>
        </div>
    );
};

export default Food;