import React from 'react';
import Navbartop from './component/Navbartop';
import Navbarmedium from './component/Navbarmedium';
import Navbardown from './component/Navbardown';
import Navbardown2 from './component/Navbardown2';
import Banner from './component/Banner';
import ListaProdotti from './component/Listaprodotti';

export const Home = () => {
  return (
    <div className="App">
    <Navbartop/>
     <Navbarmedium/>
    <Navbardown/>
    <div className='layout'>
    <Banner/>
    </div>
    <Navbardown2/>
    <div className='layout'>
   <ListaProdotti/>
   <Banner/>
   </div>
   
    {/* <Footer/> */}
  </div>
  )
}

export default Home