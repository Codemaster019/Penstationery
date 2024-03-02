import React from 'react';
import Logo from './logo.png';
import './nav.css';

function Nav(){
return (
<div>
<div className='nav_position'>
<div className='logo_div'>
<a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw'><img className='logo_nav' src={Logo}></img></a>
</div>
<div className='nav_style'>
    <a href='#'  className='nav_anchor'>Home</a>
    <a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' className='nav_anchor'>Youtube</a>
    <a href='#initial_div'  className='nav_anchor'>About</a>
    <a href='mailto:penandstationery1@gmail.com'  className='nav_anchor'>Contact</a>
    </div>
    </div>
</div>
);
}

export default Nav;