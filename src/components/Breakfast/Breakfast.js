import React from 'react';
import { foods } from '../../Data/Data';
import Food from '../Food/Food';
const Breakfast = () => {
    // console.log(foods);
    const breakfast = foods.filter(fd => fd.category === 'Breakfast');
    console.log(breakfast);
    return (

        <div class="container">
            <div class="row">
                {
                    breakfast.map(fd =>
                        <div class="col-4">
                            <Food key={fd.img} food={fd}></Food>
                        </div>
                    )
                }


            </div>
        </div>

    );
};

export default Breakfast;