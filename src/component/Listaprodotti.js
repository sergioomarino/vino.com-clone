import React, { useState } from 'react'
import Card from './Card'
import bottiglia from "../immagini/bottiglia1.jpg";
import bottiglia2 from "../immagini/bottiglia2.jpg";
import bottiglia3 from "../immagini/bottiglia3.jpg";

export const Listaprodotti = () => {
let [stato,setStato]= useState({ 
  cards:[
  {id: 0, nome: "Vino Rosso", prezzo: 1.99, immagine: bottiglia},
  {id: 1, nome: "Vino spumante", prezzo: 7.99, immagine: bottiglia2},
  {id: 2, nome: "Vino piceno", prezzo: 2.99, immagine: bottiglia3},
  {id: 3, nome: "Vino Barolo", prezzo: 4.99, immagine: bottiglia},
  {id: 4, nome: "Vino Champagne", prezzo: 5.99, immagine: bottiglia2},
  {id: 5, nome: "Vino Friuli", prezzo: 22.99, immagine: bottiglia3},
  {id: 6, nome: "Vino Rosso", prezzo: 1.99, immagine: bottiglia},
  {id: 7, nome: "Vino spumante", prezzo: 7.99, immagine: bottiglia2},
  {id: 8, nome: "Vino piceno", prezzo: 2.99, immagine: bottiglia3},
  {id: 9, nome: "Vino Barolo", prezzo: 4.99, immagine: bottiglia},
  {id: 10, nome: "Vino Champagne", prezzo: 5.99, immagine: bottiglia2},
  {id: 11, nome: "Vino Friuli", prezzo: 22.99, immagine: bottiglia3},
 
 


  ]
});



  return (
    <div class="container ">
    <div class="row">
      
       {stato.cards.map(item=>(
        <div class="col">
        <Card
        key={item.id}
        item={item}
        /> </div>
       ))}

     

      
      
    </div>

    
    
  </div>
  )
}
export default Listaprodotti