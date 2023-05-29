import logo from './logo.svg';
import './App.css';
import ProductsList from './featurs/products/ProductsList';
import Basket from './featurs/basket/Basket';
import NavBar from './NavBar';
import AddProduct from './featurs/products/AddProduct';
import { useSelector } from 'react-redux';
import Login from './featurs/user/Login';
import AddUser from './featurs/user/AddUser';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Home from './Home'
import { UpdateProd } from './featurs/products/UpdateProd';
import {reloadUserFromStorage} from "./featurs/user/userSlice"
import { ResponsiveAppBar } from './featurs/nuvBar/ResponsiveAppBar';
import MenegerLink from "./featurs/nuvBar/menegerLink";
import GuesLink from "./featurs/nuvBar/GuesLink";
import UserLink from "./featurs/nuvBar/UserLink";
import Checkout from "./featurs/basket/Checkout"


function App() {
  let currentUser = useSelector(s => s.user.user);
  let rol = useSelector(st => st.user.role)
  console.log(rol)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadUserFromStorage());
  }, [])
  
  console.log(" app " + rol)
  let navigate = useNavigate()
     
  return (<>
    {rol === "1" && <ResponsiveAppBar><MenegerLink /></ResponsiveAppBar>}
    {rol === "2" &&
      <ResponsiveAppBar><UserLink /></ResponsiveAppBar>}
    {rol === "0" &&
      <ResponsiveAppBar><GuesLink /></ResponsiveAppBar>}


    <div id="home" className="App">
    
      <Routes>
        <Route path='basket' element={<Basket/>} > </Route>
        <Route path='updateProduct' element={<UpdateProd/>} > </Route>
        <Route path='home' element={<ProductsList/>}></Route>
        <Route path='addProduct' element={<AddProduct/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='addUser' element={<AddUser />}></Route>
        <Route path='finish' element={<Checkout/>}></Route>
      </Routes>
  
     
 
  
    </div>
    </>);
}

export default App;
