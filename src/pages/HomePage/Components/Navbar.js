import { useState } from 'react';

import Hamburger from "./Hamburger"
import SideBar from './SideBar'
import './css/navStyle.css'

export default function Navbar(){

    const [side, setSide] = useState(false);

    function toggleSide(){
      setSide(prevSide => (!prevSide))
    } 
    
    return (
        <nav>
            <Hamburger toggleSide={toggleSide}/>
            {side && <SideBar />}
        </nav>
    )
}