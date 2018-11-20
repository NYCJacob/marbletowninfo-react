import React from 'react';
import styled from "styled-components";


const HeaderContainer = styled.h1`
    margin-bottom: 0.5em;
    margin-top: 1em;
    margin-left: 0.5em;
    
`;

const Logo1 = styled.span`
    font-size: 1.5em;
    background-color: #FFCF00;
    color: #000000;
    border-bottom-color: #000000;
    border-radius: 10px 0px 0px 0px;
    border-bottom: .5rem solid;
    padding-left: 1rem;
    padding-right: .5rem;
    padding-top: .5rem;
`;

const Logo2 = styled.span`
    font-size: 1.5em;
    background-color: #40617F;
    color: #ffffff;
    border-bottom-color: #000000;
    border-radius: 0px 10px 0px 0px;
    border-bottom: .5rem solid black;
    padding-left: .5rem;
    padding-right: 1rem;
    padding-top: .5rem;
`;


function Header(props) {
    return (
        <HeaderContainer fontSize={ [6,7]}>
            <Logo1>Marbletown</Logo1>
            <Logo2>Info</Logo2>
        </HeaderContainer>
    );
}

export default Header;