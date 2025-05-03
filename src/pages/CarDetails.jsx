import React from "react";
import CarInfo from "../components/CarInfo";
import {ScrollRestoration, useLoaderData} from "react-router-dom";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";
import {API_URL} from "../assets/CONSTANTS";

function CarDetails() {
    const car = useLoaderData();
    return (
        <>
            <Spacer/>
            <ScrollRestoration/>
            <CarInfo car={car}/>
            <Footer/>
        </>
    );
}

export const carLoader = async ({params}) => {
    const settings = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": 123456,
        },
        body: JSON.stringify({car_id: `${params.id}`}),
    };
    const res = await fetch(API_URL + "/api/v1/car/specific", settings);
    const data = await res.json();
    return data;
};

export default CarDetails;
