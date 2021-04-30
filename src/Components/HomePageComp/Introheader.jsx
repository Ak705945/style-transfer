import React from 'react';
import img from './Images/Frame 13Image-min.png'

function Introheader() {
  return (

  <div className="row">
    <div className="col-lg-6 Intro">
      <h1 className="IntroText">Image Style<br/> Transfer</h1></div>
    <div className="col-lg-6">

    <img src={img} alt="IST"/>
    </div>
    </div>
);
  }
  export default Introheader;
