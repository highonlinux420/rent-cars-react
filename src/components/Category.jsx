import React from "react";
import styled from "styled-components";

function Category({selected, setValue, children}) {
    return (
        <Styled
            onClick={() => {
                setValue(children)
            }}
            selected={selected}
            children={children}
            style={{
                "--bgcolor": selected === children ? "var(--primary-color)" : "#fafafa",
            }}
        >
            {children}
        </Styled>
    );
}

const Styled = styled.button`
    color: ${(props) => (props.selected == props.children ? "white" : "black")};
    background-color: var(--bgcolor);
    border-radius: 50px;
    padding: 4px 16px;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
`;
export default Category;
