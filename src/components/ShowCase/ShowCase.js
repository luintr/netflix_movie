import "./showCase.scss";

import { RightArrow } from "../../assets/icon";
import { useNavigate } from "react-router-dom";

const ShowCase = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <p>
                    Watch anywhere. Cancel anytime.
                    <br />
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="sign-in-wrapper">
                    <input
                        type="text"
                        placeholder="Email Address"
                    />
                    <button onClick={() => navigate("/auth")}>
                        Sign In
                        <RightArrow />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;
