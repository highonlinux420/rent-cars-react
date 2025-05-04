import React from "react";
import styled from "styled-components";
import hidden from "../assets/hidden.png";
import PrimaryButton from "./PrimaryButton";
import Spacer from "./Spacer";
import {Link} from "react-router-dom";
import {availability} from "../CONSTANTS";
import Banner from "./Banner";

function Card({car}) {
    let time = availability(car.return_date, car.rental_date);
    return (
        <StyledDiv>
            <div>
                <Banner>
                    Available <br/> {time}
                </Banner>
                <ImageWrapper>
                    {car.img_url ? (
                        <StyledImg src={car.img_url}/>
                    ) : (
                        <StyledImg src={hidden}/>
                    )}
                </ImageWrapper>
                <FlexWrapper>
                    <div>
                        <Model>{car.brand}</Model>
                        <GrayP>{car.type}</GrayP>
                    </div>
                    <div>
                        <Price>{car.price_per_day}$</Price>
                        <GrayP>Per Day</GrayP>
                    </div>
                </FlexWrapper>
                <FlexWrapper>
                    <div>
                        <GrayP>{car.gear_box}</GrayP>
                    </div>
                    <div>
                        <GrayP>{car.seats}</GrayP>
                    </div>
                    {car.air_conditioner ? (
                        <div>
                            <GrayP>Air Conditioner</GrayP>
                        </div>
                    ) : undefined}
                </FlexWrapper>
            </div>
            <Spacer/>
            <div>
                <Link to={`/car/${car.car_id}`}>
                    <PrimaryButton>View Details</PrimaryButton>
                </Link>
            </div>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa;
  padding: 24px;
  border-radius: 20px;
  margin-left: 10px;
`;
const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Model = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Price = styled.p`
  color: var(--primary-color);
  font-size: 24px;
  font-weight: var(--semi-bold);
`;

const GrayP = styled.p`
  color: var(--gray-60);
`;

export default Card;
