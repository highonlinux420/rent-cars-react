import React from "react";
import styled from "styled-components";

function Info({icon, title, text}) {
    return (
        <Flex>
            <PhoneWrapper>
                {icon}
                <ContactWrapper>
                    <StyledP>{title}</StyledP>
                    <StyledP>{text}</StyledP>
                </ContactWrapper>
            </PhoneWrapper>
        </Flex>
    );
}

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PhoneWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    & > :first-child {
        border-radius: 50%;
        padding: 8px;
        background-color: var(--secondary-color);
        color: white;
    }
`;

const StyledP = styled.p`
    margin: 4px 0;

    &:last-of-type {
        font-weight: 700;
    }
`

const Flex = styled.div`
    display: flex;
    min-width: 225px;
`;

export default Info;
