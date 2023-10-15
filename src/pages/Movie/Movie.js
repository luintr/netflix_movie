import "./movie.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as apiService from "../../services/apiServices";

import MovieList from "../Movie/MovieList/MovieList";
import CircularProgress from "@mui/material/CircularProgress";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Tag from "../../components/Tag/Tag";
import { Skeleton } from "@mui/material";

const Movie = (props) => {
    const [bannerLink, setBannerLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const apiResults = async () => {
        setIsLoading(true);
        try {
            const responsePopular = await apiService.getMovie("upcoming");
            const responseDetail = await apiService.getDetail(responsePopular.results[0].id);
            setBannerLink(responseDetail);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        apiResults();
    }, []);

    if (!bannerLink) return null;
    const { id, title, vote_average, adult, backdrop_path, genres } = bannerLink;

    const Banner = () => {
        return (
            <div className="banner">
                {isLoading ? (
                    <div className="skeletonWrap">
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            sx={{ bgcolor: "grey.900" }}
                            width={`100%`}
                            height={`100%`}
                        />
                        <div className="banner-box">
                            <div className="bannerTitle">
                                <Skeleton
                                    variant="rounded"
                                    animation="wave"
                                    sx={{ bgcolor: "grey.900" }}
                                    width={`100%`}
                                    height={60}
                                />
                            </div>

                            <div className="flexDiv">
                                <Skeleton
                                    variant="circular"
                                    animation="wave"
                                    sx={{ bgcolor: "grey.900" }}
                                    width={60}
                                    height={60}
                                />
                                <Skeleton
                                    variant="rounded"
                                    animation="wave"
                                    sx={{ bgcolor: "grey.900" }}
                                    width={210}
                                    height={60}
                                />
                            </div>

                            <div className="bottom">
                                <Skeleton
                                    variant="rounded"
                                    animation="wave"
                                    sx={{ bgcolor: "grey.900" }}
                                    width={210}
                                    height={60}
                                />
                                <Skeleton
                                    variant="rounded"
                                    animation="wave"
                                    sx={{ bgcolor: "grey.900" }}
                                    width={210}
                                    height={60}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="wrap-content">
                        <div className="banner-img">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                                alt={title}
                            />
                        </div>

                        <div className="banner-box">
                            <h2 className="bannerTitle">{title}</h2>
                            <div className="flexDiv">
                                <div className="progressCircle">
                                    <CircularProgress
                                        variant="determinate"
                                        value={vote_average * 10}
                                    />
                                    <i className="percentNumber">{vote_average.toFixed(1)}</i>
                                </div>

                                <div className="type">
                                    {genres.map((text) => (
                                        <Tag
                                            key={text.id}
                                            text={text.name}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="buttonWatch">
                                    <PlayArrowRoundedIcon /> WATCH NOW
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

                        {!adult ? (
                            <div className="adult-tag">
                                <p>13+</p>
                            </div>
                        ) : (
                            <div className="adult-tag">
                                <p>18+</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="moviepage">
            <Banner />
            <div className="moviePart">
                <div className="container-fluid">
                    <h3 className="lineTittle">Popular</h3>
                    <MovieList type={"popular"} />

                    <h3 className="lineTittle">Up Coming</h3>
                    <MovieList type={"upcoming"} />
                </div>
            </div>
        </div>
    );
};

export default Movie;
