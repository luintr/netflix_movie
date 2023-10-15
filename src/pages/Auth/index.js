import "./styles.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authServices from "../../services/authServices";

import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login";

const Auth = () => {
    const formState = useSelector((state) => state.login.formState);
    const [captcha, setCaptcha] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const requestUser = async () => {
        const responseUser = await authServices.getUsers("users");
        setUserData(responseUser);
    };
    useEffect(() => {
        requestUser();
    }, [formState]);

    //Validate
    const onSignupFinish = async (value) => {
        dispatch(loginActions.changeForm());
        navigate("/auth");
        messageApi.open({
            type: "success",
            content: "Sign Up Success",
            duration: 4,
        });
        await authServices.postUsers("users", value);
    };

    const onSigninFinish = (value) => {
        const checkValue = userData.filter(
            (item) => item.username.includes(value.username) && item.password.includes(value.password),
        );
        if (checkValue) {
            dispatch(loginActions.isLogin());
            navigate("/movie");
            localStorage.setItem("user", JSON.stringify(checkValue));
        } else {
            messageApi.open({
                type: "error",
                content: "Username or Password incorrect",
                duration: 4,
            });
        }
    };

    //showCaptchaPolicy
    const showCaptchaPolicy = () => setCaptcha(true);
    const changeFormHandler = () => dispatch(loginActions.changeForm());

    const SignInForm = () => {
        return (
            <div className="box">
                <h2>Login</h2>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onSigninFinish}
                    autoComplete="on"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please enter your email!" }]}
                    >
                        <Input
                            className="inputForm"
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please enter your password!" }]}
                    >
                        <Input.Password
                            className="inputForm"
                            placeholder="Password"
                            autoComplete="on"
                        />
                    </Form.Item>

                    <Form.Item valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <div className="bottom-box">
                    <p className="txt">
                        New to Netflix? <span onClick={changeFormHandler}>Sign up now.</span>
                    </p>
                    <p className="txt2">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                        <span
                            onClick={showCaptchaPolicy}
                            className={`${!captcha ? "" : "none"}`}
                        >
                            Learn more.
                        </span>{" "}
                    </p>
                    <p className={`descCaptcha ${captcha ? "display" : ""}`}>
                        The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms
                        of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for
                        general security purposes (it is not used for personalized advertising by Google).
                    </p>
                </div>
            </div>
        );
    };

    const SignUpForm = () => {
        return (
            <div className="box">
                <h2>Register</h2>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onSignupFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                    >
                        <Input
                            className="inputForm"
                            placeholder="Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please enter your email!" }]}
                    >
                        <Input
                            className="inputForm"
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please enter your password!" }]}
                    >
                        <Input.Password
                            className="inputForm"
                            placeholder="Password"
                            autoComplete="on"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("The two passwords that you entered do not match!"),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            className="inputForm"
                            placeholder="Re-enter Password"
                            autoComplete="on"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>

                <div className="bottom-box">
                    <p className="txt">
                        Already have account? <span onClick={changeFormHandler}>Sign in</span>
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="authPage">
            {contextHolder}
            {formState ? <SignInForm /> : <SignUpForm />}
        </div>
    );
};

export default Auth;
