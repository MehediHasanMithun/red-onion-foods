import React from 'react';
import map from '../../Images/Image/map.png';
import bike from '../../Images/Image/Group 1151.png';
import man from '../../Images/Image/Group 1152.png';
import './PlaceOrder.css';
import Avatar from '@material-ui/core/Avatar';
import Nav from '../NavBar/Nav';
const PlaceOrder = () => {
    return (
        <div>
        <Nav></Nav>
        <div className="d-flex justify-content-center">
            <div className="map">
                <img className="map" src={map} alt="Map"></img>
            </div>
            <div className="delivery-details">
                <div>
                      <img className="bike" src={bike} alt="Bike" />
                    <div className="location">
                        <p> <span className="dot"></span> <span style={{ fontWeight: "600" }}>Your Location</span> <br /><span style={{ marginLeft: "18px", opacity: "0.8" }}>107 Rd No 8</span></p>
                        <p> <span className="dot"></span> <span style={{ fontWeight: "600" }}>Shop Address</span> <br /><span style={{ marginLeft: "18px", opacity: "0.8" }}>Gulshan Plaza Restaura GPR</span></p>
                    </div>
                      <p><span style={{ marginLeft: "18px", fontSize: "36px", fontWeight: "700" }}>09:30</span> <br /><span style={{ marginLeft: "20px", opacity: "0.8" }}>Estimated Delivery Time</span></p>

                    <div className="d-flex justify-content-left location">
                        <div>
                            <img style={{ width: "70px" }} src={man} alt="Shamim" />
                        </div>
                        <div style={{marginTop:"15px"}}>
                            <span style={{marginLeft:"10px", fontWeight: "600" }}>Shamim </span> <br /> <span style={{ marginLeft: "10px", opacity: "0.8" }}>Your Raider</span>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger contact-btn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PlaceOrder;