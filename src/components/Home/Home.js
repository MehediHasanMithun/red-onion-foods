import React, { useContext, useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Nav from '../NavBar/Nav';
import './Home.css';
import { AiOutlineMinus } from "react-icons/ai";
import { foodDetailContext } from '../../App';
import FoodDetail from '../FoodDetail/FoodDetail';

const Home = () => {
   const [foodDetail,setFoodDetail] = useContext(foodDetailContext);

   const [clicked,setClicked] = useState("lunch");

  // console.log(foodDetail,"foodDetail");
  
   useEffect(()=>{
        if(foodDetail.id)
          setClicked("");
   },[foodDetail]);
  
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
                  <button onClick={handleBreakfast} style={{color:clicked==="breakfast"?"red":"black",lineHeight:"0%"}} className="category-btn">Breakfast <br/><AiOutlineMinus style={{fontSize:"50px",visibility:clicked==="breakfast"?"visible":"hidden"}}/></button>
                  <button onClick={handleLunch} style={{color:clicked==="lunch"?"red":"black",lineHeight:"0%"}}  className="category-btn">Lunch <br/><AiOutlineMinus style={{fontSize:"50px",visibility:clicked==="lunch"?"visible":"hidden"}}/></button>
                  <button onClick={handleDinner} style={{color:clicked==="dinner"?"red":"black",lineHeight:"0%"}} className="category-btn">Dinner<br/><AiOutlineMinus style={{fontSize:"50px",visibility:clicked==="dinner"?"visible":"hidden"}}/></button>
              </div>
              

                   {clicked==='breakfast' && <Breakfast></Breakfast>}
                   {clicked==='lunch' && <Lunch></Lunch>}
                   {clicked==='dinner' && <Dinner></Dinner>}
                   {clicked==='' && <FoodDetail food ={foodDetail}></FoodDetail>}
        </div>
    );
};

export default Home;