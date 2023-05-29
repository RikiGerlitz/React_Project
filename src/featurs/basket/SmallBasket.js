import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import Basket from './Basket';
import {  Link } from 'react-router-dom';
import "./smallBasket.css"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';




function ElevationScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};

const SmallBasket = (props) => {
    let arr=useSelector(state=>state.basket.basketArr)
    let totalQty=useSelector(state=>state.basket.totalQty)
    let totalPrice=useSelector(state=>state.basket.totalPrice)
    
  return (<>
  <ElevationScroll {...props} >
 
    <Card sx={{ maxWidth: 250 }}className="css">
      <Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          סל הקניות שלי
          
        </Typography>
           
        <Typography variant="body2" color="text.secondary">
     
        <ul className="containers">
       
       {arr.map(item=><li key={item.id}> 
        {item.name}
        <CardMedia
        sx={{ height:200}}
        image={item.image}/>
        <h3>כמות: {item.qty}</h3>
        {item.price*item.qty}     
         </li>)}    
      
        </ul> 
        </Typography> 
      </CardContent>
      <CardActions>
        
        <div> <h7>כמות המוצרים בסל:</h7>{totalQty}</div>
        <div> <h7>סה"כ לתשלום:</h7>{totalPrice}</div>
       
      
      </CardActions>
      </Typography>
      </Card>
      </ElevationScroll>
     </>);
}

export default SmallBasket;