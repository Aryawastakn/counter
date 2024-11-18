import React from 'react';
import User from './component/User';
import './App.css';

function App(){
  return(
    <>
    <div>
      <marquee><h1 className="txt">Fetching data through API</h1></marquee>
      <User /> 
    </div>
    </>
  )
};

export default App;