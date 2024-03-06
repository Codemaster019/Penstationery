import React from 'react';
import Logo from './logo.png';
import './nav.css';
import { Fade } from "react-awesome-reveal";

function Nav(){
return (
<div>
<div className='nav_position'>
<div className='logo_div'>
<a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' target="_blank"><img className='logo_nav' src={Logo}></img></a>
</div>
<Fade>
<div className='nav_style'>
    <a href='#'  className='nav_anchor'>Home</a>
    <a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' className='nav_anchor' target="_blank">Youtube</a>
    <a href='#initial_div'  className='nav_anchor'>About</a>
    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=penandstationery1@gmail.com'  className='nav_anchor' target="_blank">Contact</a>
    </div>
    </Fade>
    </div>
</div>
);
}

export default Nav;