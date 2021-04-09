import { Carousel } from 'antd';
import React from 'react';
import '../css/Slider.css';
export default function Slider() {
    const contentStyle = {
        // height: '300px',
        // color: '#fff',
        // lineHeight: '160px',
        textAlign: 'center',
        // background: '#ccc',
        width:'100%',
      };
    return(
        <div >
            <Carousel style={{margin:'15px'}} autoplay className="slider-1">
            <div >
              <h3 >
                <img src="img/slider-1.png" alt="123"/>
             </h3>
            </div>
            <div>
              <h3 >
                <img src="img/slider-1.png" alt="123"/>
              </h3>
            </div>
            <div>
              <h3 >
                <img src="img/slider-1.png" alt="123"/>
              </h3>
            </div>
            <div>
              <h3 >
                <img src="img/slider-1.png" alt="123"/>
              </h3>
            </div>
          </Carousel>
          
        </div>
    );
}