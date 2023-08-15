import React, { useEffect, useState } from "react";
import "./header.scss";
import { NetflixLogo } from "../../assets/icon";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login";
import Profile from "../Profile/Profile";
import NavMobile from "./NavMobile/NavMobile";
import { hamActions } from "../../store/hamburger";


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //State from store
  const formState = useSelector((state) => state.login.formState)
  const loginState = useSelector((state) => state.login.loginState)
  const hamburgerState = useSelector((state) => state.hamburger.isOpen)

  const navigateLogin = () => {
    navigate('/auth')
    dispatch(loginActions.changeForm())
  }

  const valueLogin = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    if (valueLogin) {
      dispatch(loginActions.setLoginTrue())
    }
  }, [])

  const AuthButtons = (props) => {
    return (
      <div>
        {formState ?
          <div className="btn" onClick={navigateLogin}>
            <span>Sign Up</span>
          </div>
          :
          <div className="btn" onClick={navigateLogin}>
            <span>Sign In</span>
          </div>}
      </div>
    )
  }

  return (
    <div className="main-wrapper">
      <div className="header container-fluid">
        <div className="header-left logo-wrapper">
          <div className="logo" onClick={() => navigate('/movie')}>
            <NetflixLogo />
          </div>

          <div className={`nav`}>
            <Link to='movie'>Movie</Link>
            <Link to='tv'>TV Show</Link>
            <Link to='search'>Search</Link>
          </div>
        </div>

        <div className="header-right">
          {loginState ? <Profile /> : <AuthButtons />}
        </div>

        <button className={`hamburger hamburger--vortex ${hamburgerState ? 'is-active' : ''}`} type="button" onClick={() => dispatch(hamActions.isActive())}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <NavMobile />
      </div>
    </div >
  );
};

export default Header;
