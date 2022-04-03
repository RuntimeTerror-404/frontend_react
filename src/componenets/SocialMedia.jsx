import React from "react";
import { BsInstagram, BsLinkedin, BsGithub, BsCodechef } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const link1 = "https://www.linkedin.com/in/mohit-parashar-2849201b8/";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/mohit-parashar-2849201b8"
        target="_blank"
      >
        {<BsLinkedin />}
      </a>
    </div>
    <div>
      <a href="https://github.com/RuntimeTerror-404" target="_blank">
        {<BsGithub />}
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/mohit_parasharr/?hl=en"
        target="_blank"
      >
        {<BsInstagram />}
      </a>
    </div>
  </div>
);

export default SocialMedia;
