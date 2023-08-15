import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import './movieItem.scss'
import { useNavigate } from 'react-router-dom';
import NoImg from '../../../assets/img/No-Image-Placeholder.png'
const MovieItem = ({ data }) => {
    const { id, title, release_date, vote_average, adult, poster_path } = data
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate(`/movie/${id}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='movieItem' key={id}>
            <div className='movieImg'>
                <img src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : NoImg} alt={title} />
            </div>
            <div className='boxInfo'>
                <h3 className='title'>{title}</h3>
                <div className='middleInfo'>
                    <p className='date'>{release_date.slice(0, 4)}</p>
                    {adult ? <p className='adult'>18+</p> : ''}
                </div>
                <div className='progressCircle'>
                    <CircularProgress variant="determinate" value={vote_average * 10} />
                    <span className='percentNumber'>{vote_average.toFixed(1)}</span>
                </div>

                <div className='navigateButton' onClick={navigateHandler}>
                    <PlayCircleRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default MovieItem