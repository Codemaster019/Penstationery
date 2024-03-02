import React from 'react';
import Nav from './navbar/nav';
import Dashboard from './Dashboard/dashboard';
import Video from './videobar/video';
import Review from './review/review';
import Footer from './footer/footer';

function App(){
return (
<div>
   <Nav />
   <Dashboard />
   <Video />
   <Review />
   <Footer />
</div>
);
}

export default App;