import React from "react";
// import Header from "../../components/Header/Header";
import SectionHomePage from "../../components/SectionHomePage/SectionHomePage";
import Image from "../../assets/img/device-pile-vn.png";
import ImageKid from "../../assets/img/kid-netflix.png";
import DownloadIcon from "../../assets/img/download-icon.gif";
import Tv from "../../assets/img/tv.png";
import MainVideo from "../../assets/img/main-video.m4v";
import SubVideo from "../../assets/img/sub-video.m4v";
import MobileTheme from "../../assets/img/mobile-theme.jpg";
import BoxShot from "../../assets/img/boxshot.png";
import Accordion from "../../components/Accordion/Accordion";
import ShowCase from "../../components/ShowCase/ShowCase";

const Homepage = (props) => {

  return (
    <React.Fragment>
      <ShowCase />

      <SectionHomePage
        title="Enjoy on your TV."
        content="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={Tv}
      >
        <div className={`video-tv `}>
          <video src={MainVideo} autoPlay muted loop></video>
        </div>
      </SectionHomePage>

      <SectionHomePage
        title="Download your shows to watch offline."
        content="Save your favorites easily and always have something to watch."
        img={MobileTheme}
        flex="reverse"
      >
        <div className={`image`}>
          <img src={BoxShot} alt="" className="main-img" />
          <div className="image-center">
            <p>Stranger Things</p>
            <span>Downloading...</span>
          </div>
          <img src={DownloadIcon} alt="" className="down-img" />
        </div>
      </SectionHomePage>

      <SectionHomePage
        title="Watch everywhere."
        content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img={Image}
      >
        <div className={`video-tv video-tv2`}>
          <video
            src={SubVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </SectionHomePage>

      <SectionHomePage
        title="Create profiles for kids."
        content="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img={ImageKid}
        flex="reverse"
      ></SectionHomePage>

      <Accordion />
    </React.Fragment>
  );
};

export default Homepage;
