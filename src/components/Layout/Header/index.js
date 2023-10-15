import "./styles.scss";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LINKS } from "../../../constant";
import { ham, login } from "../../../store";

import { NetflixLogo } from "../../../assets/icon";
import Profile from "../../Profile";
import NavMobile from "./Mobile";
import Container from "../../Container";

const Header = () => {
    const dispatch = useDispatch();

    //State from store
    const formState = useSelector((state) => state.login.formState);
    const loginState = useSelector((state) => state.login.loginState);
    const hamburgerState = useSelector((state) => state.hamburger.isOpen);

    const changeStateAuth = () => {
        dispatch(login.actions.changeForm());
    };

    const valueLogin = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (valueLogin) {
            dispatch(login.actions.setLoginTrue());
        }
    }, [valueLogin, dispatch]);

    const AuthButtons = (props) => {
        return (
            <button
                type="button"
                className="btn"
                onClick={changeStateAuth}
            >
                <Link to="/auth">{formState ? "Sign Up" : "Sign In"}</Link>
            </button>
        );
    };

    return (
        <header id="header">
            <Container className="inner">
                <div className="left">
                    <div className="logo-wrapper">
                        <Link
                            className="logo"
                            to="/"
                        >
                            <NetflixLogo />
                        </Link>
                    </div>

                    <ul className="nav">
                        {LINKS.HEADER.map((item) => {
                            return (
                                <li key={item.id}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="right">{loginState ? <Profile /> : <AuthButtons />}</div>

                <button
                    className={`hamburger hamburger--vortex ${hamburgerState ? "is-active" : ""}`}
                    type="button"
                    onClick={() => dispatch(ham.actions.isActive())}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                <NavMobile />
            </Container>
        </header>
    );
};

export default Header;
