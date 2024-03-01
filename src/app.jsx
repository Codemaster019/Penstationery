import React from 'react';
import Nav from './navbar/nav';
import Dashboard from './Dashboard/dashboard';
import Video from './videobar/video';
import Review from './review/review';

function App(){
return (
<div>
   <Nav />
   <Dashboard />
   <Video />
   <Review />
</div>
);
}

export default App;