import React from "react";
import Footer from "./Footer";
import Title from "./TryPageComp/Title";
import InputComp from "./TryPageComp/InputComp";
import Button from "./Button";

function TryPage() {
  return (
    <div className="scene_element scene_element--fadein">
      <Title />
      <div className="row">
        <div className="col-lg-6">
          <InputComp title="1.Select Art Style" />
        </div>
        <div className="col-lg-6">
          <InputComp title="2.Select Base Image" />
        </div>
      </div>
      <div className="ResultSection">
        <Button name="Generate Art" title="tryButton" />
      </div>

      <Footer />
    </div>
  );
}
export default TryPage;
