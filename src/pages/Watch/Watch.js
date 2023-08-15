import React, { useEffect } from 'react'
import * as apiService from '../../services/apiServices';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorFilm from '../../assets/img/bg-mindhunter-v2.png'
import './watch.scss'

const Watch = () => {
    const { movieID } = useParams()
    // const [movie, setMovie] = useState([])

    const navigate = useNavigate()
    const videoResult = async () => {
        const responseVideo = await apiService.getWatch(movieID)
        console.log(responseVideo.results)
    }
    useEffect(() => {
        videoResult()
    }, [])

    return (
        <div className='movieVideo'>
            <img src={ErrorFilm} alt="Error Film" />

            <div className='boxInfo'>
                <h1>Sorry for the interruption</h1>
                <p>The Netflix service is not available on your device.</p>
                <div className='button' onClick={() => navigate('/movie')}>Homepage</div >
                <p className='err-code'>Error Code <span>{movieID} - 404</span></p>
            </div>
        </div>
    )
}

export default Watch