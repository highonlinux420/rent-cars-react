import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CardGrid from "../components/CardGrid";
import Category from "../components/Category";
import Footer from "../components/Footer";
import {API_URL} from "../CONSTANTS";
import {useLocation} from "react-router-dom";
import Spacer from "../components/Spacer";

function CarsPage() {
    const [selected, setSelected] = useState("All vehicles");
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    let location = useLocation();
    const getCar = async () => {
        const settings = {
            method: "GET",
        };
        const res = await fetch(API_URL + "/api/v1/cars/all", settings);
        const data = await res.json();
        setCars(data);
        setLoading(false);
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        if (location.state) {
            setCars(location.state.cars);
            setLoading(false);
        } else {
            const type = new URLSearchParams(location.search).get("type");
            if (type != null) {
                setSelected(type);
            }
            getCar();
        }
    }, []);
    return (
        <>
            <div>
                <Heading>Select a Vehicle Group</Heading>
            </div>
            <Spacer/>
            <Flex>
                <Category selected={selected} setValue={setSelected}>
                    All vehicles
                </Category>
                <Category selected={selected} setValue={setSelected}>
                    Sedan
                </Category>
                <Category selected={selected} setValue={setSelected}>
                    Coupe
                </Category>
                <Category selected={selected} setValue={setSelected}>
                    SUV
                </Category>
                <Category selected={selected} setValue={setSelected}>
                    Sports
                </Category>
            </Flex>
            <CardGrid loading={loading} cars={cars} selected={selected}/>
            <Footer/>
        </>
    );
}

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 0;
    font-weight: var(--bold);
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
`;

export default CarsPage;
