<<<<<<< HEAD
import React, { useState } from "react";
import Footer from "./Footer";
import Title from "./TryPageComp/Title";
import InputComp from "./TryPageComp/InputComp";
import Button from "./Button";
import HelpCard from "./HomePageComp/HelpCard";
import axios from "axios";

function TryPage() {
  const [StyleImage, setStyleImage] = useState();
  const [BaseImage, setBaseImage] = useState();
  const [ResImage, setResImage] = useState();
  function handleStyleChange(link) {
    setStyleImage(link);
  }
  function handleBaseChange(link) {
    setBaseImage(link);
  }
  function generateImage() {
    callAPI();
    // functionCall(StyleImage,BaseImage)
  }

  function callAPI() {
    axios
      .post("https://reqres.in/api/users", {      //just change the url of in here
        styleLink: StyleImage,
        baseLink: BaseImage,
      })
      .then(function (response) {
        console.log(response);
      });
  }
  return (
    <div className="scene_element scene_element--fadein">
      <Title />
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <InputComp title="1.Select Art Style" getImage={handleStyleChange} />
        </div>
        <div className="col-lg-5">
          <InputComp title="2.Select Base Image" getImage={handleBaseChange} />
        </div>
      </div>
      <div className="ResultSection">
        <Button name="Generate Art" title="tryButton" onClick={generateImage} />
      </div>
      <div className=" row justify-content-center">
        <div className="col-lg-5">
          <HelpCard Image={ResImage} title="3.Result image" alt=""></HelpCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default TryPage;
