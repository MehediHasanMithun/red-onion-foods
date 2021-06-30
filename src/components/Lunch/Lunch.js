import React from 'react';
import { foods } from '../../Data/Data';
import Food from '../Food/Food';
const Lunch = () => {
    const lunch = foods.filter(fd =>fd.category === 'Lunch');
    //console.log(lunch);
    return (
        <div className="container">
        <div className="row">
            {
                lunch.map(fd =>
                    <div className="col-4">
                        <Food key={fd.img} food={fd}></Food>
                    </div>
                )
            }


        </div>
    </div>
    );
};

export default Lunch;