import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./productList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";                 



const Product = (props) => {
  const [number, setNumber] = useState(0);
  let currentUser = useSelector(s => s.user.role);
  let navigate=useNavigate();
  let disp = useDispatch();
  let a = Number(number);
    let item=props.item
    let onClickAdd=props.onClickAdd;
    let onClickDelete=props.onClickDelete;
    let onClickEdit=props.onClickEdit;
    

     
    return (  
        <Card sx={{ width:400,backgroundColor:"#f2f2f2" ,height:600}}>
        <CardMedia
        sx={{ height:350}}
        image={item.image}
        
        />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
        {item.name} 
        </Typography>
        <Typography gutterBottom variant="h7" component="div"> 
        ₪{item.price}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" className="description">
        {item.description} 
        </Typography>
      </CardContent>
      {currentUser!="1"&&
        <CardActions sx={{ justifyContent: "center" }}>
        <Button  variant="outlined" color="primary" size="small" onClick={()=>{onClickAdd(item)}} >הוסף לסל</Button>
        </CardActions>}
        {currentUser=="1"&&
        <CardActions sx={{ justifyContent: "center" }}>
        <IconButton color="primary" aria-label="add to shopping cart"  onClick={()=>{onClickDelete(item)}}  >
                       <DeleteIcon  color='info'  />
        </IconButton>
        
         <Button id="addButton" variant="contained"  onClick={() => { navigate('/updateProduct',{state:{name:props.item.name,image:props.item.image, price:props.item.price, description:props.item.description,color:props.item.color,grams:props.item.grams,id:props.item.id } }) }}>עדכון מוצר</Button> 
        </CardActions>}
        </Card>  

    );
}

export default Product;