import React from 'react';
import { styled, css, up, down } from '@smooth-ui/core-sc'

const HeaderContainer = styled.h1`
    //margin-bottom: 0.5em;
    margin-top: .5em;
    margin-left: 0.5em;
    padding-bottom: 0;
    margin-bottom: 0;
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
    ${down('md', css`
      font-size: 1.0em;
    `)}
    ${down('sm', css`
      font-size: 0.7em;
    `)}
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
    ${down('md', css`
      font-size: 1.0em;
    `)}
    
    ${down('sm', css`
      font-size: 0.7em;
    `)}
`;


function Header(props) {
    return (
        <HeaderContainer>
            <Logo1>Marbletown</Logo1>
            <Logo2>Info</Logo2>
        </HeaderContainer>
    );
}

export default Header;