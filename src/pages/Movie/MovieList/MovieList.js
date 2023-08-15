import React, { useEffect, useState } from 'react'
import * as apiService from '../../../services/apiServices';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ type }) => {
    const [dataRes, setDataRes] = useState([])

    const apiResults = async () => {
        try {
            const responseData = await apiService.getMovie(type)
            setDataRes(responseData.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        apiResults()
    }, [])

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={6}
            navigation
            breakpoints={{
                1600: {
                    slidesPerView: 7
                },
                960: {
                    slidesPerView: 5
                },
                768: {
                    slidesPerView: 4
                },
                468: {
                    slidesPerView: 3
                },
                320: {
                    slidesPerView: 2
                },
            }}
        >
            {dataRes.map(data =>
                <SwiperSlide key={data.id} >
                    <MovieItem data={data} />
                </SwiperSlide>)}
        </Swiper>
    )
}

export default MovieList