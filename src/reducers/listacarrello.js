import React from 'react'

const ADDCHART= "aggiungiacarrello";

export const listacarrelloreducers = (pstate=[],action) => {
  switch(action.type){
    case ADDCHART:
      let nstate= [...pstate,action.payload];
      console.log(nstate);
      return nstate;
     
  }
  return pstate;
  
}

export default listacarrelloreducers;

const actionAddChart= (prezzo,nome,immagine)=>{
  return {
    type :ADDCHART,
    payload: { 
      prezzo:prezzo,
      nome:nome,
      immagine:immagine
    }
  }
}
 export {actionAddChart};