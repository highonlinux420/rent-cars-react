import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import nissan from "../assets/nissan.png";
import ArrowDown from "../assets/arrow-down.svg";
import IconInput from "./IconInput.jsx";
import {Calendar} from "react-feather";
import {API_URL} from "../assets/CONSTANTS";
import {Link, useNavigate} from "react-router-dom";

function Hero() {
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);
    const [rentalDate, setRentalDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const navigate = useNavigate();
    const getTypes = async (brand) => {
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": 123456,
            },
            body: JSON.stringify({rent_d: rentalDate, return_d: returnDate, brand: brand}),
        };
        const res = await fetch(
            API_URL + "/api/v1/cars/types",
            settings
        );
        const data = await res.json();
        setTypes(data.type);
    };
    const getCars = async (brand, type) => {
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": 123456,
            },
            body: JSON.stringify({rent_d: rentalDate, return_d: returnDate, brand: brand, type: type}),
        };
        const res = await fetch(
            API_URL + "/api/v1/cars/filtered",
            settings
        );
        const data = await res.json();
        navigate("/cars", {state: {cars: data}});
    };
    useEffect(() => {
        const getBrands = async () => {
            const settings = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": 123456,
                },
                body: JSON.stringify({rent_d: rentalDate, return_d: returnDate}),
            };
            const res = await fetch(
                API_URL + "/api/v1/cars/brands",
                settings
            );
            const data = await res.json();
            setBrands(data.brand);
        };
        if (returnDate != "" && rentalDate != "") {
            getBrands();
        } else {
            setBrands([]);
            setTypes([]);
            setType("");
        }
    }, [returnDate, rentalDate]);
    return (
        <Flex>
            <Background></Background>
            <LeftColumn>
                <Heading>
                    Experience <br/> The Road Like Never Before
                </Heading>
                <Paragraph>
                    This is the one and only place for arranging your car trips.<br/>
                    Explore all ranges of vehicles that will suit your needs. <br/>
                    We have everything from Compact Sedans to Supercars!
                </Paragraph>
                <StyledDiv>
                    <Link to="/cars">
                        <SecondaryButton>View all cars</SecondaryButton>
                    </Link>
                </StyledDiv>
            </LeftColumn>
            <Form>
                <div>
                    <h2>Book Your Car</h2>
                </div>
                <FlexForm>
                    <IconInput
                        value={rentalDate}
                        handleChange={setRentalDate}
                        placeholder={"Rental Date"}
                        home
                        icon={<Calendar/>}
                        type="text"
                    />
                    <IconInput
                        value={returnDate}
                        handleChange={setReturnDate}
                        placeholder={"Return Date"}
                        home
                        icon={<Calendar/>}
                        type="text"
                    />
                    <StyledSelect onChange={e => {
                        getTypes(e.target.value);
                        setBrand(e.target.value)
                    }} {...(brands.length === 0 ? {disabled: true} : {disabled: false})} defaultValue={""}>
                        <option value="" hidden>
                            Car Brand
                        </option>
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </StyledSelect>
                    <StyledSelect
                        onChange={(e) => setType(e.target.value)} {...(types.length === 0 ? {disabled: true} : {disabled: false})}
                        defaultValue={""}>
                        <option value="" hidden>
                            Car Type
                        </option>
                        {types.map((type) => (
                            <option key={types.indexOf(type)} value={type}>{type}</option>
                        ))}
                    </StyledSelect>
                    <SecondaryButton
                        handleClick={() => getCars(brand, type)} {...(type == "" ? {disabled: true} : {disabled: false})}>Book
                        now</SecondaryButton>
                </FlexForm>
            </Form>
        </Flex>
    );
}

const Paragraph = styled.p`
font-size: 1.2rem;
`

const StyledDiv = styled.div`
  width: 150px;
  @media (max-width: 717px) {
    width: 100%;
  }
`;

const StyledSelect = styled.select`
    font-family: Roboto, sans-serif;
    appearance: none;
    background-color: #fafafa;
    background-position: right;
    background-repeat: no-repeat;
    background-image: url(${ArrowDown});
    background-position-x: 95%;
    border-radius: 12px;
    padding: 12px 52px 12px 16px;
    font-weight: 500;
    font-size: 16px;

    &:hover {
        color: black;
    }

    &:focus {
        border: 2px solid #4374cb;
    }
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: clamp(2.5rem, 1.5vw + 1.3rem, 3.125rem);
`;

const LeftColumn = styled.div`
  align-self: center;
  flex: 2;
  & > button {
    width: 150px;
    @media (max-width: 716px) {
      width: 100%;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--primary-color);
  border-radius: 40px;
  padding: clamp(1rem, 2.8vw + 1.1rem, 4.5rem);
  color: white;
  gap: 44px;
`;

const Background = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${nissan});
    filter: blur(8px);
    transform: scaleX(-1);
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: bottom;
    @media (max-width: 716px) {
        display: none;
    }
`;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > button {
    margin-top: 16px;
  }
`;

const Form = styled.div`
  background-color: white;
  border-radius: 20px;
  color: black;
  padding: 40px;
  flex: 1;
  min-width: min(100%, 300px);
  & h2 {
    text-align: center;
    margin-bottom: 40px;
    font-weight: var(--semi-bold);
    margin-top: 0;
  }
`;

export default Hero;
