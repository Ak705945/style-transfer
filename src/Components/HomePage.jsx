import React from "react";
import Introheader from "./HomePageComp/Introheader";
import Stinfo from "./HomePageComp/Stinfo";
import HelpCard from "./HomePageComp/HelpCard";
import Footer from "./Footer";
import Button from "./Button";
import BaseImage from "./HomePageComp/Images/Base.png";
import StyleImage from "./HomePageComp/Images/Style.png";
import ResultImage from "./HomePageComp/Images/Res.png";

function HomePage() {
  return (
    <div className="homePage">
      <Introheader />
      <Stinfo />
      <div className="row">
        <div className="col-lg-5">
          <HelpCard 
            title="1.Base Image" 
            Image={BaseImage} 
            alt="Base Image" />
        </div>
        <div className="col-lg-2">
          <i class="fas fa-plus-circle icons"></i>
        </div>
        <div className="col-lg-5">
          <HelpCard
            title="2.Style Image"
            Image={StyleImage}
            alt="Style Image"
          />
        </div>
      </div>
      <i class="fas fa-chevron-down icons"></i>
      <div className="ResCard">
        <HelpCard
          id="ResCard"
          title="3.Result Image"
          Image={ResultImage}
          alt="Result Image"
        />
      </div>
      <Button title="tryButton" name="Try it now!"></Button>

      <Footer />
    </div>
  );
}
export default HomePage;
