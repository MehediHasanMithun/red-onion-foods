import React from 'react';
import './Food.css';
const Food = (props) => {
    console.log(props);
    const {food} = props;
    return (
        <div className="food-item">
            <img src={food.img} alt="Food" />
            <h6>{food.name}</h6>
            <p style={{color:"gray"}}>{food.shortDescription}</p>
            <h4>${food.price}</h4>
        </div>
    );
};

export default Food;