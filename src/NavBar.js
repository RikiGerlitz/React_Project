import {  Link } from 'react-router-dom';
import './navBar.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SmallBasket from './featurs/basket/SmallBasket';
// import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import User from './featurs/user/User';






const NavBar = () => {
   let [show,setShow]=useState(false);
    return ( 

        <nav >
            <ul className="container">
                {/* <li>
                    <IconButton color="primary" aria-label="add to shopping cart"onClick={()=>{setShow(!show)}}>
                      <LocalMallOutlinedIcon color='info'  />
                    </IconButton>
                    {show&&<SmallBasket/>}
                
                </li>
                <User/> */}
            </ul>
        </nav>
     );
}
 
export default NavBar;