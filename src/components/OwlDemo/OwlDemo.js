import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function OwlDemo(props) {
  return (
    <OwlCarousel items={3}  
    className="owl-theme  "  
    loop  
    nav  
    margin={8} >  
     {props.children}
    </OwlCarousel>
  )
}

export default OwlDemo