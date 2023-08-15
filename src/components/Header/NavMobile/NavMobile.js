import React, { useEffect, useState } from 'react'
import { NetflixLogo } from '../../../assets/icon'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'antd'
import { loginActions } from '../../../store/login'
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './navMobile.scss'
import { hamActions } from '../../../store/hamburger'

const NavMobile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [avatarKey, setAvatarKey] = useState('')

    const loginState = useSelector((state) => state.login.loginState)
    const hamburgerState = useSelector((state) => state.hamburger.isOpen)

    useEffect(() => {
        if (loginState) {
            setAvatarKey(JSON.parse(localStorage.getItem('user')).name.slice(0, 1).toUpperCase())
        }
    }, [loginState])

    const LogoutHandler = () => {
        dispatch(loginActions.isLogin())
        dispatch(loginActions.setFormStateTrue())
        dispatch(hamActions.isActive())
        localStorage.removeItem('user')
        navigate('/auth')
    }

    const AuthButtons = (props) => {
        return (
            <div className='authBtn'>
                <div className="btn" onClick={() => {
                    navigate('/auth')
                    dispatch(loginActions.setFormStateTrue())
                    dispatch(hamActions.isActive())
                }}>
                    <span>Sign In</span>
                </div>

                <div className="btn" onClick={() => {
                    navigate('/auth')
                    dispatch(loginActions.setLoginFalse())
                    dispatch(loginActions.setFormStateFalse())
                    dispatch(hamActions.isActive())
                }}>
                    <span>Sign Up</span>
                </div>
            </div>
        )
    }

    const offNav = () => {
        dispatch(hamActions.isActive())
    }

    return (
        <div className={`mobileNav ${hamburgerState ? 'is-active' : ''}`}>
            <div className='container'>
                <div className="logo" onClick={() => {
                    navigate('/movie')
                    dispatch(hamActions.isActive())
                }}>
                    <NetflixLogo />
                </div>
                <div className="user">
                    <div className='avatar'>
                        {loginState ?
                            <Avatar
                                size="large"
                                style={{
                                    backgroundColor: '#f56a00',
                                    verticalAlign: 'middle',
                                    cursor: 'pointer'
                                }}
                            >{`${avatarKey}`}</Avatar>
                            :
                            <AuthButtons />}
                    </div>
                    {loginState ?
                        <div className='buttons'>
                            <div className='btn'><ModeEditRoundedIcon /></div>
                            <div className='btn' onClick={LogoutHandler}><LogoutRoundedIcon /></div>
                        </div>
                        : ''
                    }

                </div>

                <div className='navList'>
                    <Link to='movie' onClick={offNav}>Movie</Link>
                    <Link to='tv' onClick={offNav}>TV Show</Link>
                    <Link to='search' onClick={offNav}>Search</Link>
                </div>
            </div>
        </div>
    )
}

export default NavMobile