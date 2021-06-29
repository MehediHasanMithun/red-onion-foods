import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Nav from '../NavBar/Nav';
import './Home.css';
const Home = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="banner-bg">
            <Nav></Nav>
            <div className="banner-text">
              <h1>Best food waiting for your belly</h1>
               <form onSubmit={handleSubmit}>
                   <input className="search-box" type="text" name="" id="" placeholder="Search food items" />
                   <input className="search-btn" type="submit" value="Search" />
                   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
               </form>
            </div>
              
                <Breakfast></Breakfast>
                 <Lunch></Lunch>
                 <Dinner></Dinner>
            
        </div>
    );
};

export default Home;