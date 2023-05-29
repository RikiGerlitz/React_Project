import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteProductFromServer, fetchAllProducts} from "./productsSlice";
import { addProduct } from "../basket/basketSlice";
import * as React from 'react';
import "./productList.css"
import SmallBasket from "../basket/SmallBasket";
import Product from "./Product";




const ProductsList = () => {
    let arr= useSelector(state=> state.product.productsArr);
    let dispatch = useDispatch();
    let [flag,setFlag]=useState(false);
    let timeOut=null;
    useEffect(() => {
            dispatch(fetchAllProducts())
    }, [])

    function onClickAdd(item){
      dispatch(addProduct({...item}))
      clearTimeout(timeOut)
      setFlag(true)
      timeOut=setTimeout(()=>{setFlag(false)},5000)
     }
     
     const onClickDelete=(item)=>{
       dispatch(deleteProductFromServer(item))
        
     };
    const onClickEdit=(item)=>{

    }
    return (<>
    
    {flag&&< SmallBasket/>}
     <ul className="container">
        {arr.map(item=><li key={item.id}>
          <Product item={item} onClickAdd={onClickAdd} onClickDelete={onClickDelete} onClickEdit={onClickEdit}/>
       </li>)}
      
     
    </ul>
   </> );
    
    
}
 
export default ProductsList;




