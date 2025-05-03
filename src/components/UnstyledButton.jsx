import React from "react";
import styled from "styled-components";

function UnstyledButton({children, disabled}) {
    return <StyledButton type="button" disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    border: 0;
    color: inherit;
    background: inherit;
    font-size: inherit;
    cursor: pointer;
    padding: 12px;

    &:disabled {
        color: inherit;
    }
`;

export default UnstyledButton;
