import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upDateProductToServer } from "./productsSlice";


export const UpdateProd = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { state } = useLocation();
    const { name, image,price,description,color, grams,id} = state;
    const submitTionFunc = (data) => {
        debugger
        dispatch(upDateProductToServer({ ...data }));
        navigate('/home');
    }
    let { register, handleSubmit, handleChange, formState: { isDirty, errors, dirtyFields, touchedFields } } = useForm({ mode: "onTouched" })
    return (<form onSubmit={handleSubmit(submitTionFunc)} className="addForm">
        <label>שם המוצר</label>
        <input type="text" defaultValue={name} {...register("name")}/>
        <label>תמונה</label>
        <input type="text" defaultValue={image}  {...register("image")}/>
        <label>מחיר</label>
        <input type="text" defaultValue={price}  {...register("price")}/>
        <label>תיאור המוצר</label>
        <input type="text" defaultValue={description} {...register("description")}/>
        {/* <label>צבע</label>
        <input type="text" defaultValue={color} {...register("color")}/>
        <label>כמות</label>
        <input type="text" defaultValue={grams} {...register("grams")}/> */}
        <input type="text" defaultValue={id} {...register("id")}/>
        <input type="submit" value="עדכן" />
    </form>);
}
