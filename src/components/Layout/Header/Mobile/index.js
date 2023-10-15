import "./styles.scss";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ham, login } from "../../../../store";

import { NetflixLogo } from "../../../../assets/icon";
import { Avatar } from "antd";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { LINKS } from "../../../../constant";

const NavMobile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [avatarKey, setAvatarKey] = useState("");

    const loginState = useSelector((state) => state.login.loginState);
    const hamburgerState = useSelector((state) => state.hamburger.isOpen);

    useEffect(() => {
        if (loginState) {
            // setAvatarKey(JSON.parse(localStorage.getItem('user')).name.slice(0, 1).toUpperCase())
            setAvatarKey("A");
        }
    }, [loginState]);

    const LogoutHandler = () => {
        dispatch(login.actions.isLogin());
        dispatch(login.actions.setFormStateTrue());
        dispatch(ham.actions.isActive());
        localStorage.removeItem("user");
        navigate("/auth");
    };

    const AuthButtons = (props) => {
        return (
            <div className="authBtn">
                <div
                    className="btn"
                    onClick={() => {
                        navigate("/auth");
                        dispatch(login.actions.setFormStateTrue());
                        dispatch(ham.actions.isActive());
                    }}
                >
                    <span>Sign In</span>
                </div>

                <div
                    className="btn"
                    onClick={() => {
                        navigate("/auth");
                        dispatch(login.actions.setLoginFalse());
                        dispatch(login.actions.setFormStateFalse());
                        dispatch(ham.actions.isActive());
                    }}
                >
                    <span>Sign Up</span>
                </div>
            </div>
        );
    };

    const offNav = () => {
        dispatch(ham.actions.isActive());
    };

    return (
        <div className={`mobileNav ${hamburgerState ? "is-active" : ""}`}>
            <div className="container">
                <div
                    className="logo"
                    onClick={() => {
                        navigate("/movie");
                        dispatch(ham.actions.isActive());
                    }}
                >
                    <NetflixLogo />
                </div>
                <div className="user">
                    <div className="avatar">
                        {loginState ? (
                            <Avatar
                                size="large"
                                style={{
                                    backgroundColor: "#f56a00",
                                    verticalAlign: "middle",
                                    cursor: "pointer",
                                }}
                            >{`${avatarKey}`}</Avatar>
                        ) : (
                            <AuthButtons />
                        )}
                    </div>
                    {loginState ? (
                        <div className="buttons">
                            <div className="btn">
                                <ModeEditRoundedIcon />
                            </div>
                            <div
                                className="btn"
                                onClick={LogoutHandler}
                            >
                                <LogoutRoundedIcon />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="navList">
                    {LINKS.HEADER.forEach((item) => {
                        return (
                            <Link
                                key={item.id}
                                to={item.link}
                                onClick={offNav}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
