import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { addUserToServer } from "./userSlice";
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const submitTionFunc = (data) => {
        dispatch(addUserToServer({ ...data })); 
        
        navigate('/home')
    }
    let { register, handleSubmit, formState: { isDirty, errors, dirtyFields, touchedFields } } = useForm({ mode: "onTouched" })

    
    return (<form onSubmit={handleSubmit(submitTionFunc)} className="addForm">
        <label >סיסמא  </label>
        <input type="passwd" {...register("password", {
            required: "סיסמא שדה חובה",
            pattern: {
                value: /[0-9]{9}/,
                message: "סיסמא לא תקינה"
            }
        })} />
        {errors.password && <p>סיסמא לא תקינה</p>}
<br/>
        <label>שם משתמש </label>
        <input type="text" {...register("name", {
            required: "יש להקיש רק אותיות",
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: "יש להקיש רק אותיות"
            }
        })} />
     {errors.name && <p>יש להקיש רק אותיות</p>}
<br/>
     <label>כתובת </label>
        <input type="text" {...register("address", {
            required: "יש להקיש רק אותיות",
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: "יש להקיש רק אותיות"
            }
        })} />
     {errors.address && <p>יש להקיש רק אותיות</p>}

<br/>
        <label>טלפון</label>
        <input type="text" {...register("telphone")} />
<br/>
        <label>מייל </label>
        <input type="text" {...register("mail", { required: true,pattern:/^[a-zA=Z0-9]+@+[a-zA=Z0-9]+.+[A-Za-z]+$/})} />
        {errors.mail && <p>המייל לא תקין</p>}

        <input type="submit" />



    </form>)
}

export default AddUser;