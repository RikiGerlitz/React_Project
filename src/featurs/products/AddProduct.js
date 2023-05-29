
import { useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import { addProductToServer } from "./productsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
    let navigate=useNavigate();
    let{register,handleSubmit,formState:{errors,isValid}}=useForm({mode:"onBlur"});
    let dispatch=useDispatch();
    const submission=(data)=>{console.log(data)
    dispatch(addProductToServer(data))
    };
    console.log(errors)
    const submitTionFunc = (data) =>{
      let x = dispatch(addProductToServer(data)).unwrap().then(res => {
          if (res.status==500)
            alert("can not add a product")
          else
            navigate('/home')
        });
  }
    return (  
        <form onSubmit={handleSubmit(submitTionFunc)  } >
            
            <label> שם המוצר</label>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
            {...register("name",{required:"שדה חובה" , pattern: /^[A-Za-z]+$/ })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">שם המוצר</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
            {errors.name?.type === "required" && <p className="error-message">{errors.name.message}</p>}
            {errors.name?.type === "pattern"&& <p className="error_message"> שגיאת תווים לא חוקיים</p>}
            </FormControl>
            <br/> 
            <label> תמונה</label>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
            {...register("image",{required:"שדה חובה" })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">תמונה</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
            {errors.name?.type === "required" && <p className="error-message">{errors.name.message}</p>}
            </FormControl>
            <br/> 
            
            <label>משקל</label>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
          {...register("grams",{required:"שדה חובה", min: 1, max: 15 })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">משקל</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
            {errors.grams?.type === "required" && <p className="error-message">{errors.grams.message}</p>}
            {errors.grams?.type === "max"&& <p className="error_message">שגיאה מספר גבוהה מידי</p>}
            {errors.grams?.type === "min"&& <p className="error_message">שגיאה מספר נמוך מידי</p>}
            </FormControl>
            <br/> 


            <label>צבע</label>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
         {...register("color",{required:"שדה חובה", pattern: /^[A-Za-z]+$/i })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">צבע</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
           {errors.color?.type === "required" && <p className="error-message">{errors.color.message}</p>}
            {errors.color?.type === "pattern"&& <p className="error_message"> שגיאת תווים לא חוקיים</p>}
            </FormControl> 
            <br/> 


            <label>תאור המוצר</label><FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
          {...register("description",{required:"שדה חובה", pattern: /^[A-Za-z]+$/i })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">תאור המוצר</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
           {errors.description?.type === "required" && <p className="error-message">{errors.description.message}</p>}
            {errors.description?.type === "pattern"&& <p className="error_message"> שגיאת תווים לא חוקיים</p>}
            </FormControl> 
            <br/> 


            <label>מחיר המוצר</label>
            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined" color="primary" size="small">
            <OutlinedInput
         {...register("price",{required:"שדה חובה", min: 20, max: 500 })}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">מחיר המוצר</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}/>
            {errors.price?.type === "required" && <p className="error-message">{errors.price.message}</p>}
            {errors.price?.type === "max"&& <p className="error_message">שגיאה מחיר גבוהה מידי</p>}
            {errors.price?.type === "min"&& <p className="error_message">שגיאה מחיר נמוך מידי</p>}
            </FormControl> 
            <br/> 


            <Button variant="outlined"  type="submit" disabled={!isValid} color="primary" size="small" endIcon={<SendIcon />} >send</Button>
            
        </form>
    );
}
 
export default AddProduct;