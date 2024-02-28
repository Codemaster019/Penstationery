import React from 'react';
import Lottie from 'lottie-react';
import animationData from './dashani.json';
import './dashboard.css';

function Dashboard (){
    return (
    
    <div>
    
    <div className='para_container'>
  
    <div className='para_position'>
    <p className='para_dash'>Elevate Your Desk.</p>
    <p className='para_dash'>Ink Your Ideas.</p>
    <p className='para_dash'>Stationery Stories Unfold.</p>
    </div>
    <Lottie animationData={animationData} />
    </div>
    <div className='join_now'>
    <div className='para_div_join'>
    <p className='para_join'>"Got an eye-catching stationery video that you're proud of ? Share it with us, and if it catches our attention, we'll feature it on our channel for all to see!"</p>
    </div>
    <div className='button_join'>
    <button class="btn">Upload ⬆️</button>
    </div>
    </div>
    </div>
  
    );
}

export default Dashboard;