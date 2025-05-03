import React from "react";
import styled from "styled-components";
import {CheckCircle} from "react-feather";

function Feature({name}) {
    return (
        <Flex>
            <CheckCircle/>
            <p>&nbsp; {name}</p>
        </Flex>
    );
}

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export default Feature;
