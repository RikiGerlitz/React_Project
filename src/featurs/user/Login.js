import {  useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getUser } from "./userSlice";
import * as React from 'react';




const Login = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let currentUser = useSelector(st => st.user.user);
    let users = useSelector(st => st.user.status);
  
    const submitTionFunc = (data) => {
        console.log("data",data);
      let x = dispatch(getUser(data)).unwrap().then(res => {
        
        if (res=="undefined")
          navigate('/addUser');
        else
          navigate('/home')
      });
     
    }
    let { register, handleSubmit, formState: { isDirty, errors, dirtyFields, touchedFields,isValid } } = useForm({ mode: "onTouched" })
  
  
    return (
      <>
        <form onSubmit={handleSubmit(submitTionFunc)} className="addForm">
          <label>שם משתמש: </label>
          <input type="text" {...register("userName", { required: true })} />
          {errors.userName && <p>שם משתמש שדה חובה</p>}
  <br/>
          <label>סיסמא: </label>
          <input type="text" {...register("password", {
            required: "סיסמא שדה חובה",
            pattern: {
              value: /[0-9]{9}/,
              message: "סיסמא לא תקינה"
            }
          })} />
          {errors.password && <p>{errors.password.message}</p>}
  
  <br/>
          <input type="submit" placeholder="הכנס"  />
  
  
  
        </form>
  
  
       
      </>
    );
  }
  




export default Login;