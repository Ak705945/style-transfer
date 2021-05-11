import React from "react";

function Stinfo() {
  return (
    <div className="stinfo">
      <h2 className="infoHead"> What is Image Style Transfer ? </h2>
      <hr />{" "}
      <p className="info">
        {" "}
        If you’ve ever imagined what a photo might look like if it were painted
        by a famous artist, then style transfer is the computer vision technique
        that turns this into a reality.In more technical terms it is a technique
        that takes two images a content image and a style reference image and
        blends them together so that the resulting output image retains the core
        elements of the content image, but appears to be “painted” in the style
        of the style reference image.A scenary, for example, would supply the
        image content, and the van Gogh painting would be the style reference
        image. The output result would be a Scenary image that looks like a van
        Gogh original!.below is what it would look like in a practice{" "}
      </p>
      <hr />
    </div>
  );
}
export default Stinfo;
