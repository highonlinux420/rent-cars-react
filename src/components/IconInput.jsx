import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const IconInput = ({
                       placeholder,
                       home,
                       icon,
                       name,
                       handleClick,
                       type,
                       value,
                       handleChange,
                   }) => {
    const [Type, setType] = useState(type);
    const thisInput = useRef();
    useEffect(() => {
        if (Type === "date") {
            thisInput.current.click();
            thisInput.current.showPicker();
        }
    }, [Type]);

    return (
        <Wrapper>
            <IconWrapper
                type="button"
                onClick={() => {
                    setType(handleClick(Type));
                }}
            >
                {icon}
            </IconWrapper>
            <div>
                <InputWrapper
                    name={name}
                    ref={thisInput}
                    type={Type}
                    placeholder={placeholder}
                    onClick={() => {
                        if (home) {
                            setType("date");
                        }
                    }}
                    value={value}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                />
            </div>
        </Wrapper>
    );
};

export default IconInput;

const Wrapper = styled.div`
    position: relative;
    isolation: isolate;
`;

const IconWrapper = styled.button`
    border: 0;
    background-color: transparent;
    padding: 0;
    position: absolute;
    top: 3px;
    bottom: 0;
    right: 12px;
    z-index: 2;
    cursor: pointer;
`;

const InputWrapper = styled.input`
    z-index: 1;
    width: 100%;
    position: relative;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #fafafa;
    border: 2px solid var(--gray-60);
    outline: 1px solid var(--gray-60);

    &:focus {
        border-color: var(--primary-color);
        outline: 2px solid var(--primary-color);
    }

    &:hover {
        &::placeholder {
            color: black;
        }
    }

    &::-webkit-calendar-picker-indicator {
        background: transparent;
        color: transparent;
        cursor: pointer;
        position: absolute;
        width: auto;
        height: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`;
