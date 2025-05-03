import React from "react";
import styled from "styled-components";
import Info from "./Info";
import play from "../assets/play.png";
import apple from "../assets/apple.svg";
import {Link} from "react-router-dom";
import {Facebook, Instagram, Mail, MapPin, Phone, X, Youtube,} from "react-feather";

function Footer() {
    return (
        <>
            <Flex>
                <Column>
                    <h3>Car Rental</h3>
                    <div>
                        <Bold>
                            Your destination for car rentals in Sfax and all around Tunisia,
                            Join now to explore our fleet of vehicles available for you today!
                        </Bold>
                        <Socials>
                            <Facebook/>
                            <X/>
                            <Instagram/>
                            <Youtube/>
                        </Socials>
                    </div>
                </Column>
                <Column>
                    <Info
                        icon={<MapPin size={48}/>}
                        title="Address"
                        text="Cité Ons, Sfax, Tunisia"
                    />
                    <div>
                        <h3>Useful Links</h3>
                        <UnStyledLink to="#">About us</UnStyledLink>
                        <br/>
                        <UnStyledLink to="#">Contact us</UnStyledLink>
                        <br/>
                        <UnStyledLink to="#">Gallery</UnStyledLink>
                        <br/>
                        <UnStyledLink to="#">Blog</UnStyledLink>
                        <br/>
                        <UnStyledLink to="#">FAQ</UnStyledLink>
                    </div>
                </Column>
                <Column>
                    <Info
                        icon={<Mail size={48}/>}
                        title="Email"
                        text="nwiger@yahoo.com"
                    />
                    <div>
                        <h3>Vehicles</h3>
                        <UnStyledLink reloadDocument to="/cars">
                            All vehicles
                        </UnStyledLink>
                        <br/>
                        <UnStyledLink
                            reloadDocument
                            to={{
                                pathname: "/cars",
                                search: "?type=Sedan",
                            }}
                        >
                            Sedan
                        </UnStyledLink>
                        <br/>
                        <UnStyledLink
                            reloadDocument
                            to={{
                                pathname: "/cars",
                                search: "?type=Coupe",
                            }}
                        >
                            Coupe
                        </UnStyledLink>
                        <br/>
                        <UnStyledLink
                            reloadDocument
                            to={{
                                pathname: "/cars",
                                search: "?type=SUV",
                            }}
                        >
                            SUV
                        </UnStyledLink>
                        <br/>
                        <UnStyledLink
                            reloadDocument
                            to={{
                                pathname: "/cars",
                                search: "?type=Sports",
                            }}
                        >
                            Sports
                        </UnStyledLink>
                    </div>
                </Column>
                <Column>
                    <Info
                        icon={<Phone size={48}/>}
                        title="Phone"
                        text="+216 55 735 951"
                    />
                    <NoWrap>
                        <h3>Download App</h3>
                        <a href="#">
                            <img width={175} src={play}/>
                        </a>
                        <a href="#">
                            <img width={175} src={apple}/>
                        </a>
                    </NoWrap>
                </Column>
            </Flex>
            <CopyRight>© Copyright Car Rental 2024.</CopyRight>
        </>
    );
}

const Bold = styled.p`
    font-weight: var(--bold);
    margin-bottom: 32px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1032px) {
        gap: 0;
    }
`;

const NoWrap = styled.div`
    max-width: 270px;
`;

const CopyRight = styled.p`
    color: var(--gray-60);
    text-align: center;
    margin-top: 0px;
`;

const UnStyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: inline-block;
    margin-bottom: 10px;
`;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 60px 0px;

    & > :first-child {
        flex: 1.25;
    }

    & > :not(:first-child) {
        flex: 2;
    }
`;
const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export default Footer;
