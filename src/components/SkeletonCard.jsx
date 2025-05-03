import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const SkeletonCard = () => {
    return (
        <StyledDiv>
            <Skeleton height={200}/>
            <br/> <br/>
            <FlexWrapper>
                <Skeleton width={100} height={25}/>
                <Skeleton width={100} height={25}/>
            </FlexWrapper>
            <br/>
            <FlexWrapper>
                <Skeleton width={100} height={15}/>
                <Skeleton width={100} height={15}/>
            </FlexWrapper><br/><br/>
            <Skeleton height={15}/><br/><br/>
            <Skeleton height={40}/>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    background-color: #fafafa;
    padding: 24px;
    border-radius: 20px;
    margin-left: 10px;
`;

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default SkeletonCard;
