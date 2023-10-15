import "./footerHomePage.scss";

import { useNavigate } from "react-router-dom";
import { NetflixLogo } from "../../assets/icon";

const Footer = () => {
    const navigate = useNavigate();
    const dataFooter = [
        {
            id: 1,
            title: "Homepage",
            navigateLink: "/",
        },
        {
            id: 2,
            title: "Movie",
            navigateLink: "/movie",
        },
        {
            id: 3,
            title: "TV Show",
            navigateLink: "/tv",
        },
        {
            id: 4,
            title: "Search",
            navigateLink: "/search",
        },
        {
            id: 5,
            title: "Authenticate",
            navigateLink: "/auth",
        },

        {
            id: 6,
            title: "FAQ",
            navigateLink: "/movie",
        },
    ];

    return (
        <div className="footer">
            <div className="separate"></div>
            <div className="footer-wrapper container">
                <div className="logoFooter">
                    <NetflixLogo />
                </div>
                <div className="footer-items-list">
                    {dataFooter.map((item) => {
                        return (
                            <p
                                className="footer-item"
                                key={item.id}
                                onClick={() => {
                                    navigate(`${item.navigateLink}`);
                                    // window.scrollTo({
                                    //   top: 0,
                                    //   behavior: 'smooth'
                                    // })
                                }}
                            >
                                {item.title}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
