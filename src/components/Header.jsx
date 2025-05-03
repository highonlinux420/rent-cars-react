import React, {useEffect, useState} from "react";
import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import PrimaryButton from "./PrimaryButton";
import {Link, NavLink} from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
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
    }
    return (
        <FlexWrapper>
            <div>
                <h2>Car Rental</h2>
            </div>
            <MenuWrapper>
                <StyledNavLink to="/" onClick={() => setPrevURL("/")}>
                    <UnstyledButton>Home</UnstyledButton>
                </StyledNavLink>
                <StyledNavLink to="/cars" onClick={() => setPrevURL("/cars")}>
                    <UnstyledButton>Vehicles</UnstyledButton>
                </StyledNavLink>
                <StyledNavLink to="/car">
                    <UnstyledButton disabled>Details</UnstyledButton>
                </StyledNavLink>
                <StyledLink to="#">
                    <UnstyledButton>About Us</UnstyledButton>
                </StyledLink>
                <StyledLink to="#">
                    <UnstyledButton>Contact Us</UnstyledButton>
                </StyledLink>
            </MenuWrapper>
            <div>
                {user ? (
                    <Row>
                        <Heading>Welcome {user}!</Heading> <PrimaryButton
                        handleClick={handleClick}>Logout</PrimaryButton>
                    </Row>
                ) : (
                    <div>
                        <Link to="/login" state={{prevURL: prevURL}}>
                            <PrimaryButton>Login</PrimaryButton>
                        </Link>
                    </div>
                )}
            </div>
        </FlexWrapper>
    );
}

const Heading = styled.h2`
    margin-bottom: 5px;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
        display: none;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledLink = styled(Link)`
    color: inherit;

`

const StyledNavLink = styled(NavLink)`
    color: inherit;
    font-size: 18px;

    &.active button {
        text-decoration: underline;
    }
`;

export default Header;
