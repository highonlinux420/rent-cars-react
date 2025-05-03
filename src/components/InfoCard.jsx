import React from "react";
import styled from "styled-components";

function InfoCard({property, value, icon}) {
    return (
        <Info>
            <Icon src={icon}/>
            <p>{property}</p>
            <Value>{value}</Value>
        </Info>
    );
}

const Info = styled.div`
    background-color: #fafafa;
    padding: 22px;
    border-radius: 12px;
`

const Value = styled.p`
    color: var(--gray-60);
`

const Icon = styled.img`
    width: 42px;
`

export default InfoCard;
