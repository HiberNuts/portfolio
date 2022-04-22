import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

import profile1 from "../../assets/profImg.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Raghav Jindal</h1>
          </div>
        </div>

        <div  className="tag-cmp app__flex">
          <p className="text">Web & App Developer</p>
          
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <video  loop autoPlay>
        <source  src={codingVdeo} type="video/mp4" />
      </video> */}
      {/* <video autoPlay="true" src={codingVdeo} /> */}
      {/* <img src={images.profile} alt="profile_bg" /> */}
      <img
        className="profile-img"
        src="https://github.com/codebucks27/react-portfolio-final/blob/main/src/assets/Images/profile-img.png?raw=true"
        alt="profile_bg"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
      {[images.flutter, images.react, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
