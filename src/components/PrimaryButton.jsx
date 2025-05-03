import React from "react";
import styled from "styled-components";

function PrimaryButton({children, handleClick, disabled}) {
    return (
        <StyledButton disabled={disabled} onClick={handleClick} type="button">
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    font-weight: var(--semi-bold);
    background-color: var(--primary-color);
    margin-bottom: 5px;
    border: 0;
    width: 100%;
    border-radius: 12px;
    padding: 13px 28px;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.6;
    }
`;

export default PrimaryButton;
