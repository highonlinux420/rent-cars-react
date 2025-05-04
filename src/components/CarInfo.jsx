import React, {useState} from "react";
import hidden from "../assets/hidden.png";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import PrimaryButton from "./PrimaryButton";
import Feature from "./Feature";
import Spacer from "./Spacer";
import gearbox from "../assets/gearbox.svg";
import ac from "../assets/ac.svg";
import seats from "../assets/seats.svg";
import distance from "../assets/distance.svg";
import IconInput from "./IconInput";
import {Calendar} from "react-feather";
import {API_URL} from "../CONSTANTS";
import axios from "axios";
import Cookies from "js-cookie";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function CarInfo({car}) {
    const [rentalDate, setRentalDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const navigate = useNavigate();
    const rentCar = async () => {
        try {
            const response = await axios.get(API_URL + "/api/v1/auth/is-authorized", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": 123456,
                    access_token: Cookies.get("access_token"),
                },
                withCredentials: true,
            });
            if (response.data.isAuthorized) {
                try {
                    await axios.post(
                        API_URL + "/api/v1/car/rent",
                        {
                            rent_d: rentalDate,
                            return_d: returnDate,
                            car_id: car.car_id,
                            access_token: Cookies.get("access_token"),
                        },
                        {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "ngrok-skip-browser-warning": 123456,
                            },
                            withCredentials: true,
                        }
                    );
                    toast("Car rented successfully!");
                } catch (error) {
                    if (error.response.status === 403) {
                        toast("Car in rent at chosen date!");
                    }
                }
            } else if (response.data.refreshToken) {
                const refreshToken = await axios.post(
                    API_URL + "/api/v1/auth/refresh",
                    {access_token: Cookies.get("access_token")},
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": 123456,
                        },
                        withCredentials: true,
                    }
                );
                if (refreshToken.data.refreshed) {
                    Cookies.set("access_token", refreshToken.data.access_token);
                    rentCar();
                }
            }
        } catch (error) {
            if (error.response.status === 403) {
                navigate("/login");
            }
        }
    };
    return (
        <Flex>
            <LeftColumn>
                <h1>{car.brand}</h1>
                <Relative>
                    <Price>{car.price_per_day}$</Price> <Em>/day</Em>
                </Relative>
                {car.img_url ? <Image src={car.img_url}/> : <Image src={hidden}/>}
                <Spacer/>
                <Grid>
                    {car.img_url ? <Image src={car.img_url}/> : <Image src={hidden}/>}
                    {car.img_url ? <Image src={car.img_url}/> : <Image src={hidden}/>}
                    {car.img_url ? <Image src={car.img_url}/> : <Image src={hidden}/>}
                </Grid>
            </LeftColumn>
            <RightColumn>
                <h2>Technical specifications</h2>
                <Grid>
                    <InfoCard property="Gearbox" value={car.gear_box} icon={gearbox}/>
                    {car.air_conditioner ? (
                        <InfoCard property="Air Conditioner" value="Yes" icon={ac}/>
                    ) : undefined}
                    <InfoCard property="Seats" value={car.seats} icon={seats}/>
                    <InfoCard property="Distance" value={car.distance} icon={distance}/>
                </Grid>
                <Spacer/>
                {Cookies.get("access_token") ? (
                    <Column>
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
                        <PrimaryButton
                            {...(rentalDate === "" || returnDate === ""
                                ? {disabled: true}
                                : {disabled: false})}
                            handleClick={rentCar}
                        >
                            Rent a car
                        </PrimaryButton>
                    </Column>
                ) : (
                    <Link to="/login">
                        <PrimaryButton>Login</PrimaryButton>
                    </Link>
                )}
                <h2>Car Equipment</h2>
                <Flex>
                    <div>
                        <Feature name="ABS"/>
                        <Feature name="Air Bags"/>
                    </div>
                    <div>
                        <Feature name="Cruise Control"/>
                        <Feature name="Extra Wheel"/>
                    </div>
                </Flex>
            </RightColumn>
        </Flex>
    );
}

const Relative = styled.div`
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Em = styled.em`
  color: var(--gray-60);
`;

const Price = styled.p`
  display: inline-block;
  color: var(--primary-color);
  font-size: 32px;
  margin-top: 0;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 400px;
`;
const RightColumn = styled.div`
  flex: 1;
  min-width: 325px;
  & > :first-child {
    margin-bottom: 30px;
  }
  & > button {
    width: 40%;
    margin-bottom: 32px;

    @media (max-width: 840px) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 150px));
  gap: 24px;
`;

const Image = styled.img`
  width: 100%;
  border: 1px solid var(--gray-60);
  border-radius: 20px;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.75);
`;

const Flex = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
`;

export default CarInfo;
