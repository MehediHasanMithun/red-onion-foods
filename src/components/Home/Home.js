import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Nav from '../NavBar/Nav';
import './Home.css';
const Home = () => {
   const [clicked,setClicked] = useState("lunch");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleBreakfast=()=>{
        //console.log("breakfast");
        setClicked("breakfast");
    
    }
    const handleLunch=()=>{
        //console.log("lunch");
        setClicked("lunch");
    }
    const handleDinner=()=>{
       // console.log("dinner");
        setClicked("dinner");
    
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
              <div className="d-flex justify-content-center">
                  <button onClick={handleBreakfast} style={{color:"black"}} className="category-btn">Breakfast</button>
                  <button onClick={handleLunch}  className="category-btn">Lunch</button>
                  <button onClick={handleDinner} className="category-btn">Dinner</button>
              </div>
    
                {clicked==='breakfast' && <Breakfast></Breakfast>}
                {clicked==='lunch' && <Lunch></Lunch>}
                {clicked==='dinner' && <Dinner></Dinner>}
        </div>
    );
};

export default Home;