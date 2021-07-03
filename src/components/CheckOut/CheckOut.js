import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfoContext } from '../../App';
import Cart from '../Cart/Cart';
import Nav from '../NavBar/Nav';
import './checkOut.css';
const CheckOut = () => {
    const [placeOrder,setPlaceOrder] = useState(false);
    const [userInfo, setUserInfo] = useContext(userInfoContext);

    const handleAddressSubmit = (e) => {
        setPlaceOrder(true);
        e.preventDefault();
    }

    return (

        <div>
            <Nav></Nav>

            <div className="container d-flex justify-content-between">
                <div className="address-detail">
                <h4 className="delivery-details-heading">Edit Delivery Details</h4>
                    <form className="address-field" onSubmit={handleAddressSubmit}>
                        <input type="text" name="name" id="" placeholder="Full Name" value={userInfo.name} required/><br />
                        <input type="text" name="phone" id="" placeholder="Phone Number" required /><br />
                        <input type="text" name="region" id="" placeholder="Region" required/><br />
                        <input type="text" name="city" id="" placeholder="City" required/><br />
                        <input type="text" name="area" id="" placeholder="Area" required /><br />
                        <input type="text" name="address" id="" placeholder="Address Ex: House# 123, Street# 123, ABC Road" /><br />
                        <input id="address-submit" type="submit" value="Save & Continue" /><br />

                    </form>
                </div>
                <div className="summary-colmn">
                    <Cart></Cart>
                    <Link to="/placeorder" style={{pointerEvents:placeOrder?"":"none",width:"320px",marginTop:"20px", marginBottom: "30px",marginLeft:"20px",textDecoration:"none", backgroundColor: placeOrder? "rgba(224, 18, 18, 0.767)" : "gray" }} className="btn btn-danger">Place Order</Link>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;