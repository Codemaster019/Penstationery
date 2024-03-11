import React from 'react';
import './video.css';
import Iframes from './iframe.jsx';
import videosrc from './smoke.mp4';
import { Zoom } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";


function Video(){
    return(
    <section id='initial_div'>
    <div className='video-container'>
    <video autoPlay loop muted className="video-background">
          <source src={videosrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    <div className='content'>
    
    <div className='header_text'>
    <Zoom>
        <h1>Discover Our Handpicked Selection of the Finest Videos - Unveiling Our <span className='span_color'>Best Content</span> Yet!</h1>
        </Zoom>
    </div>
    
    <div className='iframe_div'>
    <Iframes className='iframe_responsive' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
    <Iframes  src= "https://www.youtube.com/embed/z6IaiqDdWVY?si=xFYeoZST2JE3f63c"/>
    <Iframes className='iframe_responsive' src= "https://www.youtube.com/embed/pfBp3XcGVis?si=oC4ZFOShWEzTAT6p"/>
    </div>
    <Bounce>
    <div className='button_join'>
    <a className='anchor_btn' href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' target="_blank"><button class="btn">SUBSCRIBE</button></a>
    </div>
    </Bounce>
    </div>
    </div>
    </section>
    );
  }

export default Video;

//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>