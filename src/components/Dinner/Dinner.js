import React from 'react';
import { foods } from '../../Data/Data';
import Food from '../Food/Food';
const Dinner = () => {
    const dinner = foods.filter(fd => fd.category === 'Dinner');
    console.log(dinner);
    return (
        <div class="container">
        <div class="row">
            {
                dinner.map(fd =>
                    <div class="col-4">
                        <Food key={fd.img} food={fd}></Food>
                    </div>
                )
            }


        </div>
    </div>
    );
};

export default Dinner;