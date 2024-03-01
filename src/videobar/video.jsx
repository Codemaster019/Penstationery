import React from 'react';
import './video.css';
import Iframes from './iframe.jsx';
import videosrc from './smoke.mp4';

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
        <h1>"Discover Our Handpicked Selection of the Finest Videos - Unveiling Our <span className='span_color'>Best Content</span> Yet!"</h1>
    </div>
    <div className='iframe_div'>
    <Iframes  src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
    <Iframes  src= "https://www.youtube.com/embed/z6IaiqDdWVY?si=xFYeoZST2JE3f63c"/>
    <Iframes  src= "https://www.youtube.com/embed/pfBp3XcGVis?si=oC4ZFOShWEzTAT6p"/>
    </div>
    <div className='button_join'>
    <a className='anchor_btn' href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw'><button class="btn">SUBSCRIBE</button></a>
    </div>
    </div>
    </div>
    </section>
    );
  }

export default Video;

//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>
//<Iframes className='layer layer 3' src= "https://www.youtube.com/embed/GYwc8hLj1jc?si=jRH2Egrk5fwsfxqZ"/>