import React from "react";
import styled from "styled-components";

function PrimaryButton({children, handleClick, disabled}) {
    return <StyledButton type="button" onClick={handleClick} disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    font-weight: var(--semi-bold);
    background-color: var(--secondary-color);
    border: 0;
    width: 100%;
    border-radius: 12px;
    padding: 13px 28px;
    color: white;
    margin-top: 40px;
    cursor: pointer;

    &:disabled {
        opacity: 0.6;
        cursor: auto;
    }
`;

export default PrimaryButton;
