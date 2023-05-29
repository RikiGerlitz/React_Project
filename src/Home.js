import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Home.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  
    let user = useSelector(st => st.user.status);
    let navigate = useNavigate();
    return (
        <div>
            {/* <img id="imgHome" src="https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/Cycle_BPRE_C_MAIN_DESKTOP_C3.jpg.webp"></img> */}
            <img id="imgHome" src="./imges/panLogo.png"/>
        </div>

    )
}
export default Home;