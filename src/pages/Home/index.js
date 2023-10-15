import React from "react";

import ShowCase from "../../components/ShowCase";
import Section from "../../components/Section";
import Accordion from "../../components/Accordion";

import Image from "../../assets/img/device-pile-vn.png";
import ImageKid from "../../assets/img/kid-netflix.png";
import DownloadIcon from "../../assets/img/download-icon.gif";
import Tv from "../../assets/img/tv.png";
import MainVideo from "../../assets/img/main-video.m4v";
import SubVideo from "../../assets/img/sub-video.m4v";
import MobileTheme from "../../assets/img/mobile-theme.jpg";
import BoxShot from "../../assets/img/boxshot.png";

const Homepage = (props) => {
    return (
        <React.Fragment>
            <ShowCase />

            <Section
                title="Enjoy on your TV."
                content="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                img={Tv}
            >
                <div className={`video-tv `}>
                    <video
                        src={MainVideo}
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
            </Section>

            <Section
                title="Download your shows to watch offline."
                content="Save your favorites easily and always have something to watch."
                img={MobileTheme}
                flex="reverse"
            >
                <div className={`image`}>
                    <img
                        src={BoxShot}
                        alt=""
                        className="main-img"
                    />
                    <div className="image-center">
                        <p>Stranger Things</p>
                        <span>Downloading...</span>
                    </div>
                    <img
                        src={DownloadIcon}
                        alt=""
                        className="down-img"
                    />
                </div>
            </Section>

            <Section
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
            </Section>

            <Section
                title="Create profiles for kids."
                content="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                img={ImageKid}
                flex="reverse"
            />

            <Accordion />
        </React.Fragment>
    );
};

export default Homepage;
