import { useDispatch } from "react-redux";
import { logOut } from "../user/userSlice";
import { MenuLink } from "./MenuLink"
import { ResponsiveAppBar } from "./ResponsiveAppBar";

const UserLink = () => {
    let disp=useDispatch();
    console.log("user");
     return (
    <>
        <MenuLink txt="התחברות" url="login" />
        <MenuLink txt="סל קניות" url="basket" />
        <MenuLink txt="יציאה" url="home" onClick={()=>{disp(logOut())}}/>

    </>
    );
}
export default UserLink;