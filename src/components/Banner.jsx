import React from 'react'
import styled from 'styled-components';

function Banner({children}) {
    return (
        <StyledBanner>{children}</StyledBanner>
    )
}

const StyledBanner = styled.div`
  position: absolute;
  font-weight: bold;
  text-align: center;
  top: 14px;
  right: -8px;
  background-color: var(--primary-color);
  border-radius: 10px;
  padding: 6px;
  color: white;
  z-index: 2;
`;

export default Banner