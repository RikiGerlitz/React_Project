import { MenuLink } from "./MenuLink"
import { ResponsiveAppBar } from "./ResponsiveAppBar";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import SmallBasket from '../basket/SmallBasket';

const GuesLink = () => {
    let [show,setShow]=useState(false);
    console.log("gues");
    return (
    <>
            <MenuLink txt="הרשם" url="addUser" />
            <MenuLink txt="התחברות" url="login" />
            <MenuLink txt="סל קניות" url="basket" />
            
    </>
    );
}
export default GuesLink;