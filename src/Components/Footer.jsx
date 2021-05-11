import React from "react";

function Footer() {
  return (
    <div className="Footer scene_element scene_element--fadein" id="footer">
      <h2>Contact Us.</h2>
      <a href="mailto:ak705945@gmail.com?subject=feedback">
        <i class="fas fa-envelope contact-links"></i>
      </a>
      <a href="https://www.linkedin.com/in/armaan-khan-a6511b1ab/">
        <i class="fab fa-linkedin contact-links"></i>
      </a>
      <a href="https://github.com/Ak705945">
        <i class="fab fa-github-square contact-links"></i>
      </a>
      <h3>Made By Armaan | Ankit | Anirudh | Deepak</h3>
      <br />
      <p>
        <b>© Copyright 2021</b>
      </p>
    </div>
  );
}
export default Footer;
