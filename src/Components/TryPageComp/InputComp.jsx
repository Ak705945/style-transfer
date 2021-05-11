import React, { useState } from "react";
import inputIllus from "./Images/001-input.svg";
import { storage } from "./firebase/index";

function InputComp(props) {
  const [ImageTitle, setImageTitle] = useState("No File Choosen");
  const [Image, setImage] = useState(inputIllus);
  function handleChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImageTitle(event.target.files[0].name);
      const image = event.target.files[0];
      const uploadTask = storage.ref("images/" + image.name).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setImage(url);
              props.getImage(url);
            });
        }
      );
    }
  }

  return (
    <div className="card inputcard">
      <h2 className="HelpTitle">{props.title}</h2>
      <div className="selector">
        <label className="Button">
          {" "}
          <span className="span">Select Image</span>
          <input
            type="file"
            accept="image/jpeg, image/png"
            name="image"
            id="file"
            onChange={handleChange}
          ></input>
        </label>
        <h3 className="file-name">{ImageTitle}</h3>
      </div>
      <img className="img" src={Image} alt="Input"></img>
    </div>
  );
}
export default InputComp;
