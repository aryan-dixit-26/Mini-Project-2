import { useState } from 'react';

import Hamburger from "./Hamburger"
import SideBar from './SideBar'
import './css/navStyle.css'


export default function Navbar(){

    // const margin={
    //     margin:'0'
    // };
    const [side, setSide] = useState(false);

    function toggleSide(){
      setSide(prevSide => (!prevSide))
    } 
    
    return (
        // <div className='conatiner'>
        <nav >
            {/* <h1 className='heading'>GAMER'S UNITED</h1> */}
            <Hamburger toggleSide={toggleSide}/>
            {side && <SideBar />}
        </nav>
        // </div>
    )
}