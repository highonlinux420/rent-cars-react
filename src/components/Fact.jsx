import React from "react";
import styled from "styled-components";

function Fact({property, value, icon}) {
    return (
        <Flex>
            <Icon src={icon}/>
            <div>
                <Number>{value}</Number>
                <Type>{property}</Type>
            </div>
        </Flex>
    );
}

const Type = styled.p`
    margin-top: 8px;
    color: var(--gray-60);
`;

const Number = styled.p`
    font-weight: var(--bold);
    font-size: 24px;
    margin-bottom: 0;
`;

const Icon = styled.img`
    background-color: var(--secondary-color);
    border-radius: 12px;
    padding: 6px;
    width: 65px;
    align-self: center;
`;

const Flex = styled.div`
    border-radius: 20px;
    background-color: white;
    padding: 12px 16px;
    display: flex;
    width: 275px;
    gap: 16px;
`;

export default Fact;
