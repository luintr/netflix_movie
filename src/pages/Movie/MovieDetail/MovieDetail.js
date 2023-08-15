import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom'
import * as apiService from '../../../services/apiServices'
import './movieDetail.scss'
import Tag from '../../../components/Tag/Tag'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CastList from '../CastList/CastList';
import SimilarMovie from '../SimilarMovie/SimilarMovie';
import NoImg from '../../../assets/img/No-Image-Placeholder.png'

const MovieDetail = (props) => {
    const { movieID } = useParams()
    const [detail, setDetail] = useState('');
    const [trailer, setTrailer] = useState()
    const navigate = useNavigate()

    const detailResult = async () => {
        try {
            const responseDetail = await apiService.getDetail(movieID)
            if (responseDetail) setDetail(responseDetail)
        } catch (err) {
            console.log(err)
        }
    }

    const trailerResult = async () => {
        const responseTrailer = await apiService.getVideos(movieID)
        setTrailer(responseTrailer.results[0].key)
    }

    useEffect(() => {
        detailResult()
        trailerResult()
    }, [movieID])


    if (!detail) return null;
    const { id, backdrop_path, title, poster_path, vote_average, genres, overview, status, release_date } = detail

    return (
        <div className='movieDetail'>
            <div className='banner'>
                <img src={backdrop_path ? `https://image.tmdb.org/t/p/original/${backdrop_path}` : NoImg} alt={title} />
            </div>

            <div className='container'>
                <div className='box'>
                    <div className='topInfo'>
                        <div className='infoImg'>
                            <img src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : NoImg} alt={title} />
                        </div>

                        <div className='detail'>
                            <h2 className='title'>{title}</h2>
                            <p className='date'>
                                {status}: <span>{release_date.slice(0, 7)}</span>
                            </p>
                            <div className='flexDiv'>
                                <div className='progressCircle'>
                                    <CircularProgress variant="determinate" value={vote_average * 10} />
                                    <span className='percentNumber'>{vote_average.toFixed(1)}</span>
                                </div>

                                <div className='type'>
                                    {genres.map(text => <Tag key={text.id} text={text.name} />)}
                                </div>
                            </div>
                            <p className='movieDesc'>{overview}</p>
                            <div className='buttonWatch' onClick={() => {
                                navigate(`/watch/${id}`)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }
                            }>
                                <PlayArrowRoundedIcon /> WATCH NOW
                            </div>
                            <CastList id={id} />
                        </div>
                    </div>

                    <div className='related'>
                        <div className='left'>
                            <h3 className='lineTitle'>Trailer</h3>
                            <div className='video'>
                                <iframe src={`https://www.youtube.com/embed/${trailer}?autoplay=1&loop=1&mute=0&modestbranding=0&rel=0`} title="YouTube video player" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className='right'>
                            <h3 className='lineTitle'>Related</h3>
                            <SimilarMovie id={movieID} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MovieDetail