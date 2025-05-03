import React, {useEffect, useState} from "react";
import {Menu} from "react-feather";
import styled, {css} from "styled-components";
import PrimaryButton from "./PrimaryButton";
import Spacer from "./Spacer";
import {Link, NavLink} from "react-router-dom";
import Cookies from "js-cookie";

function MobileHeader() {
    const [Hidden, setHidden] = useState(true);
    const [user, setUser] = useState("");
    const [prevURL, setPrevURL] = useState(window.location.pathname);
    useEffect(() => {
        const ACCESS_TOKEN = Cookies.get("access_token");
        if (ACCESS_TOKEN) {
            const username = Cookies.get("username");
            setUser(username);
        }
    }, []);
    const handleClick = () => {
        Cookies.remove("access_token");
        Cookies.remove("username");
        location.reload();
    };
    const hideOrShow = () => {
        Hidden ? setHidden(false) : setHidden(true);
    };
    return (
        <Mobile>
            <Flex>
                <div>
                    <Title>Car Rental</Title>
                </div>
                <div>
                    <UnstyledButton onClick={hideOrShow}>
                        <Menu/>
                    </UnstyledButton>
                </div>
            </Flex>
            {Hidden ? undefined : (
                <MenuWrapper>
                    <StyledNavLink to="/" onClick={() => setPrevURL("/")}>
                        <UnstyledButton onClick={hideOrShow}>Home</UnstyledButton>
                    </StyledNavLink>
                    <StyledNavLink to="/cars" onClick={() => setPrevURL("/cars")}>
                        <UnstyledButton onClick={hideOrShow}>Vehicles</UnstyledButton>
                    </StyledNavLink>
                    <StyledNavLink to="/car">
                        <UnstyledButton disabled onClick={hideOrShow}>Details</UnstyledButton>
                    </StyledNavLink>
                    <StyledLink to="#">
                        <UnstyledButton onClick={hideOrShow}>About Us</UnstyledButton>
                    </StyledLink>
                    <StyledLink to="#">
                        <UnstyledButton onClick={hideOrShow}>Contact Us</UnstyledButton>
                    </StyledLink>
                    {user ? (
                        <PrimaryButton handleClick={handleClick}>Logout</PrimaryButton>
                    ) : (
                        <div>
                            <Link to="/login" state={{prevURL: prevURL}}>
                                <PrimaryButton>Login</PrimaryButton>
                            </Link>
                        </div>
                    )}
                </MenuWrapper>
            )}
            {!Hidden ? <Spacer/> : undefined}
        </Mobile>
    );
}

const Mobile = styled.div`
    display: none;

    @media (max-width: 900px) {
        display: block;
        margin-top: 8px;
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -5px;
`;

const sharedStyle = css`
    text-decoration: none;
    color: red;
    font-size: 18px;
    margin-bottom: 3px;

    &.active {
        background-color: var(--secondary-color);
    }

    &:hover {
        background-color: var(--primary-color);
    }
`;

const StyledNavLink = styled(NavLink)`
    ${sharedStyle};
`;

const StyledLink = styled(Link)`
    ${sharedStyle};
`;

const Title = styled.h2`
    margin-top: 0;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const UnstyledButton = styled.button`
    border: 0;
    background: inherit;
    font-size: inherit;
    cursor: pointer;
    padding: 12px;
    margin: 0 auto;
    width: 100%;
    color: black;

    a:not(:disabled) &:hover {
        color: white;
    }

    font-weight: 700;
`;

export default MobileHeader;
