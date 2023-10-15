import "./tvdetail.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as apiServices from "../../../services/apiServices";

import { CircularProgress } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Tag from "../../../components/Tag/Tag";
import NoImg from "../../../assets/img/No-Image-Placeholder.png";

const TVDetail = () => {
    const { tvID } = useParams();
    const [detailData, setDetailData] = useState("");

    const detailAPI = async () => {
        try {
            const detailResponse = await apiServices.getDetailTVShow(tvID);
            if (detailResponse) setDetailData(detailResponse);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        detailAPI();
    }, [tvID]);
    console.log(detailData);

    if (!detailData) return null;
    const {
        backdrop_path,
        name,
        created_by,
        vote_average,
        genres,
        overview,
        languages,
        poster_path,
        production_companies,
        seasons,
    } = detailData;

    const DirectorItem = () => {
        return created_by.slice(0, 3).map((item) => (
            <div
                className="profileDirector"
                key={item.id}
            >
                <img
                    src={item.profile_path ? `https://image.tmdb.org/t/p/original/${item.profile_path}` : NoImg}
                    alt={name}
                />
                <p className="profileName">{item.name}</p>
            </div>
        ));
    };

    return (
        <div className="detailTV">
            <div className="detailBackdrop">
                <img
                    src={backdrop_path ? `https://image.tmdb.org/t/p/original/${backdrop_path}` : NoImg}
                    alt={name}
                />

                <div className="boxInfo">
                    <h2 className="box-ttl">{name}</h2>
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

                    <p className="content">{overview}</p>

                    <div className="lang">
                        Languages:
                        {languages.map((text) => (
                            <Tag
                                key={text}
                                text={text.toUpperCase()}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="middleInfo">
                    <div className="right">
                        <img
                            src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : NoImg}
                            alt={name}
                        />
                    </div>
                    <div className="left">
                        <div className="infoItem">
                            <h3 className="lineTittle">Film Director</h3>
                            <div className="directorList">
                                {created_by.length ? (
                                    <DirectorItem />
                                ) : (
                                    <div className="profileDirector">
                                        <img
                                            src={NoImg}
                                            alt="noImg"
                                        />
                                        <p className="profileName">No Infomation</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="infoItem production">
                            <h3 className="lineTittle">Production Companies</h3>
                            <div className="productionList">
                                {production_companies.slice(0, 2).map((item) => (
                                    <div
                                        className="profileProduction"
                                        key={item.id}
                                    >
                                        <div className="productionImg">
                                            {item.logo_path ? (
                                                <img
                                                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                                                    alt={item.name}
                                                />
                                            ) : (
                                                <p>No Img</p>
                                            )}
                                        </div>
                                        <p className="profileName">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomDetail">
                    <h3 className="lineTittle">Season</h3>
                    <div className="seasonList">
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={20}
                            slidesPerView={6}
                            navigation
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                },
                                960: {
                                    slidesPerView: 3,
                                },
                                468: {
                                    slidesPerView: 2,
                                },
                                320: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {seasons.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="seasonItem">
                                        <img
                                            src={
                                                item.poster_path
                                                    ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                                                    : NoImg
                                            }
                                            alt={item.name}
                                        />

                                        <div className="box">
                                            <p className="title">{item.name}</p>
                                            <div className="seasonBtn">
                                                <InfoRoundedIcon />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TVDetail;
