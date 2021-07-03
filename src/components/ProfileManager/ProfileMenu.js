import React, { useContext } from 'react';
import { userInfoContext } from '../../App';
import { Menu, MenuItem, Avatar, Button } from '@material-ui/core';
import './ProfileMenu.css';
import { useHistory } from 'react-router-dom';

const ProfileMenu = () => {
    let history = useHistory();
    const [userInfo,] = useContext(userInfoContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleProfile = ()=>{
        history.push("/profile");
      }
      const handleAccount = ()=>{
          history.push("/myaccount");
    }
    return (
        <div>
            
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar alt={userInfo.name} src={userInfo.photo} className="profile-icon" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleAccount}>My account</MenuItem>
            </Menu>
        </div>
    );
};

export default ProfileMenu;