import React from 'react';
import Lottie from 'lottie-react';
import animationData from './dashani.json';
import smoke from './smoke.mp4'
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
    
    </div>
  
    );
}

export default Dashboard;