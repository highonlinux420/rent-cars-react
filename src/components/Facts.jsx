import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Fact from "./Fact";
import silhouette from "../assets/silhouette.png";
import car from "../assets/car.svg";
import user from "../assets/user.svg";
import cal from "../assets/cal.svg";
import speedo from "../assets/speedo.svg";
import {API_URL} from "../CONSTANTS";

function Facts({inView}) {
    const [nbCars, setNbCars] = useState(0);
    const [nbClients, setNbClients] = useState(0);
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const addNbCars = async (data) => {
        let nb = 0;
        while (nb < data) {
            nb += 1;
            setNbCars(nb);
            await sleep(30);
        }
    };
    const addNbClients = async (data) => {
        let nb = 0;
        while (nb < data) {
            nb += 1;
            setNbClients(nb);
            await sleep(30);
        }
    };
    useEffect(() => {
        const getCar = async () => {
            const settings = {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": 123456,
                },
            };
            const res = await fetch(API_URL + "/api/v1/count", settings);
            const data = await res.json();
            if (inView) {
                addNbCars(data.carsNB);
                addNbClients(data.clientsNB);
            }
        };
        getCar();
    }, [inView]);
    return (
        <All>
            <Text>
                <Heading>Facts In Numbers</Heading>
                <p>
                    Our experience is unmatched. You can rest assured when dealing with us.
                    <br/> Your trust means a lot and this is why you should choose our
                    services
                </p>
            </Text>
            <Flex>
                <Fact property="Cars" value={nbCars} icon={car}/>
                <Fact property="Customers" value={nbClients} icon={user}/>
                <Fact property="Years" value={"?"} icon={cal}/>
                <Fact property="Miles" value={"?"} icon={speedo}/>
            </Flex>
        </All>
    );
}

const Text = styled.div`
    color: white;
    text-align: center;
    margin-bottom: clamp(2.5rem, 2.6vw + 1.8rem, 5rem);
`;

const All = styled.div`
    background-color: var(--primary-color);
    border-radius: 20px;
    padding: clamp(1.5rem, 3.2vw + 0rem, 3.75rem) clamp(0.75rem, 3.9vw - 0.2rem, 4.5rem);
    background-image: url(${silhouette});
    background-repeat: no-repeat;
    background-position: center;
    background-size: max(45%, 425px);
    background-attachment: fixed;
`;

const Heading = styled.h1`
    font-size: 42px;
    font-weight: 700;
    margin-top: 0;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
`;

export default Facts;
