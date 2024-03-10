import React from 'react';
import './video.css';

function Iframes(props){
    return (
        <div className='iframe_channel_div'>
            <iframe width= "400" height= "200" className={props.className} src={props.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    )
}

export default Iframes;