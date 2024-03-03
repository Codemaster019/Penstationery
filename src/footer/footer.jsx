import React, { useEffect, useState } from "react";
import './footer.css';
import videosrc from './footervid.mp4';
import Logo from './logo.png';
import { IconContext } from 'react-icons';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear.toString());
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div className="initial_footer">
  
  <div className='video-containerr'>
    <video autoPlay loop muted className="video-footer-background">
          <source src={videosrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    
   
    <div className='logo_div'>
<a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw'><img className='logo_navv' src={Logo}></img></a>
</div>
    <p>&copy;<span id="year">{year}</span> Pen&Stationery. All rights reserved.</p>
   <div className="icon_divv">
   <IconContext.Provider value={{ className: "footer-social-icon", size: '35px' }} >
   <a href='https://www.youtube.com/channel/UC5uaixznpO3fl1TuR_g45nw' className="nav_anchor_footer"><FaYoutube /></a>
   <a href='https://www.instagram.com/pen_and_stationery/' className="nav_anchor_footer"><FaInstagram /></a>
   <a href='https://mail.google.com/mail/?view=cm&fs=1&to=penandstationery1@gmail.com' className="nav_anchor_footer"><IoIosMail /> </a>
   </IconContext.Provider>
   </div>
   </div>
    </div>
    
  );
}

export default Footer;

// <div className="footer"></div>
// <div className='contentt'> </div>