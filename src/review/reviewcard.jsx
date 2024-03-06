import React from "react";
import './reviewcard.css';

function Card(props){
    return(

<div class="card">
    <div class="box">
      <div class="content">
        <h3>{props.name}</h3>
        <p>{props.review}</p>
        <a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' target="_blank">Subscribe</a>
      </div>
    </div>
  </div>
    );
}

export default Card;