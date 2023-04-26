import React from 'react'
import banner from "../immagini/vinobanner2.jpg";
import banner1 from "../immagini/vinobanner.jpg";
import './banner.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';


export const Banner = () => {

  //element
  var elements_to_watch = document.querySelectorAll('.watch');

  //callback
  var callback = function (items) {
      items.forEach((item) => {
          if (item.isIntersecting) {
              item.target.classList.add("in-page");
          }
          else {
              item.target.classList.remove("in-page");
          }

      });
  }
  //observer
  var observer = new IntersectionObserver(callback, { threshold: 0.5 });

  //apply
  elements_to_watch.forEach((element) => {
      observer.observe(element);
  });


  return (
    <div className='banner'>
          <p className='watch fade-in banner-title '>COLPETRONE</p>
  <p className='banner-subtitle'>Declinazioni del Sagrantino</p>
       
    
      
{/* 
<Splide aria-label="My Favorite Images"
options={{
 
   */}
{/* }}> */}
  {/* <SplideSlide style={{padding:"0px"}}><div>
    <img  className='banner' src={banner} alt="Image 1"/>
    
    </div>
  </SplideSlide>
  <SplideSlide>
    <img className='banner' src={banner1} alt="Image 2"/>
  </SplideSlide>
</Splide> */}

        {/* questa parte con lo slide funziona solo con immagini tag img a quanto pare
       per farlo funzionare togliere backgroun image da css */}
           
            
            
            

   



        </div>
  )
}

export default Banner;