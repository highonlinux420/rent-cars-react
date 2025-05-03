import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import IconInput from "../components/IconInput";
import {Eye, EyeOff} from "react-feather";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../assets/CONSTANTS";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    let prevURL = "/";
    useEffect(() => {
        if (location.state) {
            prevURL = location.state.prevURL;
        }
        if (Cookies.get("access_token")) {
            navigate(prevURL);
            toast("You are already logged In!");
        }
    }, [])
    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                API_URL + "/api/v1/login",
                {email: email, password: password},
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": 123456,
                    },
                    withCredentials: true,
                }
            );
            if (response.data.access_token) {
                Cookies.set("access_token", response.data.access_token);
                Cookies.set("username", email.substring(0, email.indexOf("@")));
                window.location.href = prevURL;
            }
        } catch (error) {
            if (error.response.status === 401) {
                toast("User not found!");
                setEmail("");
                setPassword("");
            }
        }
    };
    const [icon, setIcon] = useState(<Eye/>);

    function handleClick(t) {
        if (t === "password") {
            t = "text";
            setIcon(<EyeOff/>);
        } else {
            t = "password";
            setIcon(<Eye/>);
        }
        return t;
    }

    return (
        <Login>
            <Flex>
                <Heading>Login to your account</Heading>
                <label>Email:</label>
                <IconInput
                    placeholder={"johndoe@gmail.com"}
                    type="email"
                    value={email}
                    handleChange={setEmail}
                />
                <div>
                    <label>Password:</label>{" "}
                    <a style={{float: "right"}} href="#">
                        Forgot?
                    </a>
                </div>
                <IconInput
                    name="password"
                    placeholder={"**********"}
                    icon={icon}
                    type="password"
                    handleClick={handleClick}
                    value={password}
                    handleChange={setPassword}
                />
                <PrimaryButton handleClick={handleSubmit}>Login now</PrimaryButton>
            </Flex>
        </Login>
    );
}

const Heading = styled.h1`
    text-align: center;
`;

const Flex = styled.form`
    display: flex;
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: -12.5px;
    flex-direction: column;
    position: relative;
    gap: 16px;
    padding: 48px 72px;
    border-radius: 40px;
    z-index: 1;

    & > button {
        margin-top: 20px;
        margin-bottom: -10px;
    }

    &::before {
        background-color: rgba(235, 235, 235, 0.4);
        border-radius: 30px;
        content: "";
        filter: blur(3px);
        position: absolute;
        inset: 2%;
        z-index: -1;
    }
`;

const Login = styled.div`
    background: linear-gradient(to right, #ad5389, #3c1053);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export default LoginPage;
