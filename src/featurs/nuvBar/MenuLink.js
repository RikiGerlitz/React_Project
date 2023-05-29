import{Link} from"react-router-dom"
import {Button} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";



  

export const MenuLink = ({txt,url,onClick}) => {
    return(
        <Link className="li"  to={url}  >
            <Button sx={{ color: "black"}} onClick={onClick}>
            {txt}  
            </Button>
        </Link>
    );
}