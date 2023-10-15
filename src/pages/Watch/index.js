import "./styles.scss";

import { useNavigate, useParams } from "react-router-dom";

import ErrorFilm from "../../assets/img/bg-mindhunter-v2.png";

const Watch = () => {
    const { movieID } = useParams();

    const navigate = useNavigate();

    return (
        <div className="movieVideo">
            <img
                src={ErrorFilm}
                alt="Error Film"
            />

            <div className="boxInfo">
                <h1>Sorry for the interruption</h1>
                <p>The Netflix service is not available on your device.</p>
                <div
                    className="button"
                    onClick={() => navigate("/movie")}
                >
                    Homepage
                </div>
                <p className="err-code">
                    Error Code <span>{movieID} - 404</span>
                </p>
            </div>
        </div>
    );
};

export default Watch;
