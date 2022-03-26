import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://github.com/HiberNuts">
          <BsGithub />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/raghav-jindal-a56538212/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
