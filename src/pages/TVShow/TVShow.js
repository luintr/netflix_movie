import "./tvshow.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as apiService from "../../services/apiServices";

import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CircularProgress from "@mui/material/CircularProgress";

const TVShow = (props) => {
    const [data, setDate] = useState([]);
    const [banner, setBanner] = useState("");
    const [visible, setVisible] = useState(6);

    const navigate = useNavigate();

    const tvshowAPI = async () => {
        const responseLastest = await apiService.getTVShow("top_rated");
        setDate(responseLastest.results);
        if (responseLastest.results[0]) setBanner(responseLastest.results[0]);
    };

    useEffect(() => {
        tvshowAPI();
    }, []);

    if (!banner) return null;

    const Banner = ({ data }) => {
        const { id, backdrop_path, name, overview, popularity, vote_count } = data;

        return (
            <div className="bannerTV">
                <div
                    className="itemBanner"
                    key={id}
                >
                    <div className="bannerImg">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                            alt={name}
                        />
                    </div>

                    <div className="boxBanner">
                        <h2 className="box-ttl">{name}</h2>
                        <p className="content">{overview}</p>

                        <div className="bottom">
                            <p>
                                Follower: <span>{popularity}</span>
                            </p>
                            <p>
                                Rated: <span>{vote_count}</span>
                            </p>
                        </div>

                        <div
                            className="buttonInfo"
                            onClick={() => {
                                navigate(`${id}`);
                            }}
                        >
                            <InfoRoundedIcon /> More Info
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="breakpointSlide">
            <Banner data={banner} />
            <div className="showList">
                <div className="container">
                    <div className="left">
                        <p>TV SHOW</p>
                    </div>

                    <div className="right">
                        <div className="itemList">
                            {data.slice(0, visible).map((item) => (
                                <div
                                    className="showItem"
                                    key={item.id}
                                >
                                    <div className="itemImg">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="box">
                                        <h3 className="title">{item.name}</h3>

                                        <div className="vote">
                                            <CircularProgress
                                                variant="determinate"
                                                value={item.vote_average * 10}
                                            />
                                            <i>{item.vote_average.toFixed(1)}</i>
                                        </div>
                                    </div>

                                    <div
                                        className="btn"
                                        onClick={() => navigate(`${item.id}`)}
                                    >
                                        <InfoRoundedIcon />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visible >= data.length ? (
                            ""
                        ) : (
                            <div
                                className="loadBtn"
                                onClick={() => setVisible((prevState) => prevState + 3)}
                            >
                                Load more
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TVShow;
