import React, { useState } from "react";
import Footer from "./Footer";
import Title from "./TryPageComp/Title";
import InputComp from "./TryPageComp/InputComp";
import Button from "./Button";

function TryPage() {
  const [StyleImage, setStyleImage] = useState();
  const [BaseImage, setBaseImage] = useState();
  function handleStyleChange(img) {
    setStyleImage(img);
  }
  function handleBaseChange(img) {
    setBaseImage(img);
  }
  function generateImage() {
    console.log(StyleImage);
    console.log(BaseImage);
  }
  // functionCall(StyleImage,BaseImage)

  return (
    <div className="scene_element scene_element--fadein">
      <Title />
      <div className="row">
        <div className="col-lg-6">
          <InputComp title="1.Select Art Style" getImage={handleStyleChange} />
        </div>
        <div className="col-lg-6">
          <InputComp title="2.Select Base Image" getImage={handleBaseChange} />
        </div>
      </div>
      <div className="ResultSection">
        <Button name="Generate Art" title="tryButton" onClick={generateImage} />
      </div>
      <Footer />
    </div>
  );
}
export default TryPage;
