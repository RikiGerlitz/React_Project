import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import {addProduct,deletProduct } from "./basketSlice";
import "./basket.css"
import CardMedia from '@mui/material/CardMedia';
import { Navigate, useNavigate } from "react-router-dom";




const Basket = () => {
  let navigate = useNavigate();
    let arr=useSelector(state=>state.basket.basketArr)
    let totalQty=useSelector(state=>state.basket.totalQty)
    let totalPrice=useSelector(state=>state.basket.totalPrice)
    let dispatch=useDispatch();
    return (<>
    <ul className="container" >
        
        {arr.map(item=><li key={item.id}><Button  variant="outlined" color="primary" size="small"  onClick={()=>{dispatch(addProduct(item))}}>+</Button>  {item.qty}
        <Button  variant="outlined" color="primary" size="small" onClick={()=>{dispatch(deletProduct(item))}}>-</Button> 
          <CardMedia
          sx={{ height:100 ,width:100}}
          image={item.image}/>
          {item.name}
          <br/>
          {item.price*item.qty}     
          </li>)}    
       
    </ul> 
     <div>
    <div> <h7>כמות המוצרים בסל:  </h7>{totalQty}</div>
    <div> <h7>סהכ לתשלום:  </h7>{totalPrice}</div>
    <Button variant="outlined"  type="submit"  color="primary" size="small" onClick={() => { navigate('/finish')}} >לסיום הזמנה</Button>
    
    
    </div>
     </> );
}
 
export default Basket;

