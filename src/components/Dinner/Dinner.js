import React from 'react';
import { foods } from '../../Data/Data';
import Food from '../Food/Food';
const Dinner = () => {
    const dinner = foods.filter(fd => fd.category === 'Dinner');
    //console.log(dinner);
    return (
        <div className="container">
        <div className="row">
            {
                dinner.map(fd =>
                    <div className="col-4">
                        <Food key={fd.img} food={fd}></Food>
                    </div>
                )
            }


        </div>
    </div>
    );
};

export default Dinner;