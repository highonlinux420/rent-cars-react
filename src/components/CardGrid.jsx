import React from "react";
import Card from "./Card";
import styled from "styled-components";
import {ArrowRight} from "react-feather";
import {Link} from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import Spacer from "./Spacer";

function CardGrid({children, cars, selected, loading}) {
    function getFilteredCars() {
        return cars.filter((car) => {
            if (selected === "All vehicles") {
                return true;
            } else {
                return car.type === selected;
            }
        });
    }

    return (
        <>
            <Flex>
                {children ? (
                    <>
                        <Choose>{children}</Choose>
                        <View to="/cars">
                            <p style={{marginRight: "8px"}}>View All</p>
                            <ArrowRight/>
                        </View>
                    </>
                ) : undefined}
            </Flex>
            <Spacer/>
            {loading ? (
                <Grid>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </Grid>
            ) : (
                <>
                    {getFilteredCars().length >= 1 ? (
                        <Grid>
                            {getFilteredCars().map((car) => (
                                <Card img={car.img_url} key={cars.indexOf(car)} car={car}/>
                            ))}
                        </Grid>
                    ) : (
                        <>
                            <Null>No Cars Available</Null>
                        </>
                    )}
                </>
            )}
        </>
    );
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Null = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 12px;
`;

const Choose = styled.p`
  font-weight: 800;
  font-size: clamp(1rem, 0.7vw + 1.7rem, 2.5rem);
  margin-bottom: 0;
`;

const View = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-weight: 800;
  margin-right: 8px;
`;

export default CardGrid;
