import React, {useEffect, useState} from "react";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Footer from "../components/Footer";
import {API_URL} from "../CONSTANTS";
import {InView} from "react-intersection-observer";
import Spacer from "../components/Spacer";

function HomePage() {
    const [inViewPort, setInViewPort] = useState(false);
    const [loading, setLoading] = useState(true);
    const TEXT = (
        <>
            Choose the car that <br/> suits you
        </>
    );
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const getCar = async () => {
            const settings = {
                method: "GET",
            };
            const res = await fetch(API_URL + "/api/v1/cars/top-three", settings);
            const data = await res.json();
            setCars(data);
            setLoading(false);
        };
        getCar();
    }, []);
    return (
        <>
            <Hero/>
            <CardGrid loading={loading} cars={cars} children={TEXT} selected="All vehicles"/>
            <Spacer/>
            <InView as="div" onChange={(inView) => setInViewPort(inView)}>
                <Facts inView={inViewPort}/>
            </InView>
            <Footer/>
        </>
    );
}

export default HomePage;
