import React from 'react'
import "./Navbartop.css" 
import {FcAutomotive} from 'react-icons/fc';
import bandiera from '../immagini/IT.png';
import icona1 from "../immagini/icons.png";
import icona2 from "../immagini/icons2.png"

export const Navbartop = () => {
  return (
    <div>
        <nav className='navtop'>
            <span>Spedizione in:<span className='grassetto'>Italia</span></span> 
            
          <a><img src={icona1} />Spedizione gratuita </a> <a><img src={icona2} />Spedizione internazionale </a>
           
            <span className='fine'>Lingua</span><img src={bandiera}></img>
        </nav>
    </div>
  )
}


export default Navbartop;