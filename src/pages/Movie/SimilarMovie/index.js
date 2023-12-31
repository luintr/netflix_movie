import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

import * as apiService from "../../../services/apiServices";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../MovieItem";

const SimilarMovie = ({ id }) => {
    const [similarList, getSimilarList] = useState([]);

    useEffect(() => {
        const getSimilar = async () => {
            try {
                const responseSimilar = await apiService.getSimilar(id);
                if (responseSimilar) getSimilarList(responseSimilar.results);
            } catch (err) {
                throw new Error(err);
            }
        };

        getSimilar();
    }, [id]);

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 2,
                },
            }}
        >
            {similarList.map((data) => (
                <SwiperSlide key={data.id}>
                    <MovieItem data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SimilarMovie;
