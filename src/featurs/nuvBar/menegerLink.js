import { MenuLink } from "./MenuLink"
import { ResponsiveAppBar } from "./ResponsiveAppBar";
import { useDispatch } from "react-redux";
import { logOut } from "../user/userSlice";
 const MenegerLink = () => {
    let disp=useDispatch();
    console.log("menager");
    return (<>
   
        <MenuLink txt="הוספת מוצר" url="AddProduct" />
        <MenuLink txt="ניהול מוצרים" url="home" />
        <MenuLink txt="יציאה" url="home" onClick={()=>disp(logOut())}/>
   </>
    );
}
export default MenegerLink;