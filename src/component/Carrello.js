import React from 'react'
import { useState } from 'react';
import Navbardown from './Navbardown';
import Navbarmedium from './Navbarmedium';
import Navbartop from './Navbartop';
import Card from './Card';
import "./Carrello.css"
import bottiglia from "../immagini/bottiglia1.jpg";
import bottiglia2 from "../immagini/bottiglia2.jpg";
import bottiglia3 from "../immagini/bottiglia3.jpg";
import { useSelector } from 'react-redux';

export const Carrello = () => {
    // let [stato,setStato]= useState({ 
    //     cards:[
    //     {id: 0, nome: "Vino Rosso", prezzo: 1.99, immagine: bottiglia},
    //     {id: 1, nome: "Vino spumante", prezzo: 7.99, immagine: bottiglia2},
    //     {id: 2, nome: "Vino piceno", prezzo: 2.99, immagine: bottiglia3},
    //     {id: 3, nome: "Vino Barolo", prezzo: 4.99, immagine: bottiglia},
    //     {id: 4, nome: "Vino Champagne", prezzo: 5.99, immagine: bottiglia2},
    //     {id: 5, nome: "Vino Friuli", prezzo: 22.99, immagine: bottiglia3}
    //   ]
    // });
    let lista = useSelector(state => state.listacarrelloreducer);
    console.log(lista);
    console.log("il prezzo di articolo 1 è",lista[0].prezzo)
    let subtotale = 0;
    let totale;
    lista.map(items=>(subtotale= subtotale+items.prezzo))
    if(subtotale<=50){
         totale=subtotale+20 
    }
    else totale=subtotale


    return (
        <div>
            <Navbartop />
            <Navbarmedium />
            <Navbardown />

            <div >
                <div class="container text-center">
                    <div class="row ">
                        <div class="col carrellone ">
                            CARRELLO
                        </div>
                        <div class="col carrellone">
                            INDIRIZZI
                        </div>
                        <div class="col carrellone">
                            PAGAMENTI
                        </div>
                    </div>
                </div>

                <p className='chart'>Il tuo carrello</p>
                <div className='dividicarrello'>
                    <div class="container ">
                        <div class="row">
                            {lista.map(item => (
                                <div class="col">
                                    <Card
                                        key={item.id}
                                        item={item}
                                    /> </div>
                            ))}

                        </div></div>

                <div className='colonnadestra'> 
                <h4 className='dentrocolonnadestra'> Sub-totale    ......................................................{subtotale.toFixed(2)}$</h4>
                <h4 className='dentrocolonnadestra'>Spese spedizione     ......................................{subtotale>50? "Gratuite":"20$"}</h4>
                <h4 className='dentrocolonnadestra' style={{fontWeight:"bolder"}}>TOTALE   ...................................................{totale.toFixed(2)}$</h4> </div>    
                    
                </div><button  class="btn btn center buttonaggiungi largo" ><p className='aggiungi' >PROCEDI ALL'ACQUISTO</p></button>  </div></div>
    )
}
export default Carrello;