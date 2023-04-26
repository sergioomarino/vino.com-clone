import React from 'react';
import "./Navbarmedium.css" 
import logo from "../immagini/logo.png";
import {BsSearch} from "react-icons/bs";
import lente from "../immagini/lente.png";
import carrello from "../immagini/carrello.png";
import {Link} from "react-router-dom"

export const Navbarmedium = () => {
  return (
    <div>
        <nav>
       <Link to="/">   <img className='logo' src={logo}/></Link>
        
  <input type="text" className="input" placeholder="CERCA.." />
  <button type="button" class="bottone"><img className="lente" src={lente}/></button>
  <span style={{color:"transparent",padding:"40vh"}}></span>
  <Link to="/carrello"><button  type="button2" class="btn btn center" style={{height:"3vh", width:"20vh", Left:"20vh", position:"relative",alignItems:"center",display:"inline"}}><p className='nomecarrello'>CARRELLO</p><img className="carrello" src={carrello}/></button>
  </Link>
        </nav>
    </div>
  )
}


export default Navbarmedium;