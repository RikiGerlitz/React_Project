import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upDateProductToServer } from "./basketSlice";
import { useRef } from "react";

const finishOrder=()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const submitTionFunc = (data) => {
        dispatch(addUserToServer({ ...data })); 
        let x = dispatch(getUser(data)).unwrap().then(res => {
            if (res=="undefined")
              navigate('/addUser');
            else
              navigate('/home')
        });  
    }
    let { register, handleSubmit, formState: { isDirty, errors, dirtyFields, touchedFields } } = useForm({ mode: "onTouched" })
    return(
        <form onSubmit={handleSubmit(submitTionFunc)} className="addForm">
       

            </form>

    );
}
export default finishOrder;

