import React from 'react'
import { useDispatch } from 'react-redux';
import { actionAddChart } from '../reducers/listacarrello';

import './Card.css';



export const Card = (props) => {

let prezzo= (props.item.prezzo);
let nome= (props.item.nome);
let immagine= (props.item.immagine)
let dispatch=  useDispatch();


const aggiungi=(e)=>{
dispatch(actionAddChart(prezzo,nome,immagine));
}

  return (
    
    <div className='container'>
        <img className='bottiglia' src={props.item.immagine}></img> 
        <div className='colonna'>
           <p >{props.item.nome}</p> 
           <spam style={{fontWeight:"lighter",fontFamily:"Helvetica Neue",paddingTop:"0vh"}}>0,75 l <br/>Francia</spam>
           <p style={{ paddingTop:"4vh", fontWeight:"bolder",fontSize:"small"}}>{props.item.prezzo}$</p> 
           <p style={{ height:"6px",fontSize:"xx-small", fontWeight:"lighter"}}>per bottiglia (0,75 ℓ) 36,80 €/ℓ
 IVA e tasse inc.</p> 
        
        </div>
        <div className='footercard'>
        <select class="form-select-sm" aria-label="Default select example">
  <option selected >1 </option>
  <option value="1">6</option>
  <option value="2">12</option>
  <option value="3">24</option>
</select>
        <button onClick={aggiungi} type="button" class="btn btn center buttonaggiungi" ><p className='aggiungi' >AGGIUNGI</p></button> 
        </div>
    
    </div>
  )
}


export default Card