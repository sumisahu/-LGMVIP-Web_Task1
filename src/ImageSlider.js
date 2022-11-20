import  { createRef } from "react";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { Button, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ServerURL } from "../../Services/NodeServices";
import { color } from "@mui/system";


const  setImageSlider=()=>{
    return(
        <img src={`${ServerURL}/images/paytm.png`} style={{width:'97%',height:'100%',}} />
    )
}
var img= ({
    
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:true,
    
  });
  var img1=({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:true,
    prevArrow:color.red
  });

  var images = [{ 'id': 1, 'image': `${ServerURL}/images/slide1.jpg` },
  { 'id': 2, 'image': `${ServerURL}/images/slide2.jpg` },
  { 'id': 3, 'image': `${ServerURL}/images/slide3.jpg` },
  { 'id': 4, 'image': `${ServerURL}/images/slide4.jpg` },
  { 'id': 5, 'image': `${ServerURL}/images/slide5.jpg` },
  { 'id': 6, 'image': `${ServerURL}/images/slide6.jpg` },
  
  ]

export default function ImageSlider(props){
    const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
    
 
const  setImageSlider=()=>{
return images.map((item)=>{
    return(<div>
        <img src={item.image} style={{width:'97%',height:'100%',}} />
    </div>)
})

}


 
    return(<div style={{display:'flex',justifyContent:'center',alignItem:'center',width:'50%',background:'#fff',height:'auto',flexWrap:'wrap'}}>
        <div></div>

        <div style={{width:'50%',marginTop:12,marginBottom:12}}>
            <Slider {...img1} ref={(slider2) => setNav2(slider2)}  asNavFor={nav1}>
         {setImageSlider()}
            </Slider>
        </div>
        <div style={{width:'60%',marginTop:5,marginBottom:12}}>
            <Slider {...img} ref={(slider1) => setNav1(slider1)} asNavFor={nav2} >
         {setImageSlider()}
            </Slider>
        </div>
        
     
    </div>)
}