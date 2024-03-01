import React from 'react';
import './review.css';
import Card from './reviewcard';
function Review(){
    return(
        <section id='initial_sec'>
        <div></div>
        <div className='initial_div'>
        <h1 className='header_review'>"Exquisite Critique: <span className='span_review'>A Showcase of Reviews"</span></h1>
        </div>
        <div>
        <div class="container">
        <Card name='Neha' review='A treasure trove of stationery inspiration and tips!'/>
        <Card name='Dravin' review='Engaging content that sparks creativity and organization.'/>
        <Card name='Aditi' review='An authentic and informative hub for stationery addicts!'/>
        </div>
        </div>
        </section>
    );
}

export default Review;