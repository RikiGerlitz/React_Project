import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const User=()=>{
    let navigate = useNavigate(); 
    const send=(e)=>{
        let path=e.target.name
        console.log(path);
        navigate(path)
    }
   return(
    <>
     <Button variant="contained" type="submit" name="login" onClick={send}>התחבר</Button>
     <Button variant="contained" type="submit" name="addUser" onClick={send}>הרשם</Button>
    
    </>
   )
        
    

}
export default User;