import React from 'react';
import { Row, Col, Typography, styled, css, down } from '@smooth-ui/core-sc'
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.h1`
* { box-sizing: border-box; }
    //margin-bottom: 0.5em;
    margin-top: 0.05em;
    margin-left: 0.3em;
    padding-bottom: 0;
    margin-bottom: 0;
    a {
      text-decoration: none;
    }
`;

const Logo1 = styled.span`
* { box-sizing: border-box; }
    font-size: 2.0em;
    background-color: #FFCF00;
    color: #000000;
    border-bottom-color: #000000;
    border-radius: 10px 0px 0px 0px;
    border-bottom: .5rem solid;
    padding-left: 1rem;
    padding-right: .5rem;
    ${down('lg', css`
      font-size: 1.0em;
    `)}
    ${down('md', css`
      font-size: 0.8em;
    `)}
    ${down('sm', css`
      font-size: 0.6em;
      border-bottom: .3rem solid;
    `)}
`;

const Logo2 = styled.span`
* { box-sizing: border-box; }

    font-size: 2.0em;
    background-color: #40617F;
    color: #ffffff;
    border-bottom-color: #000000;
    border-radius: 0px 10px 0px 0px;
    border-bottom: .5rem solid black;
    padding-left: .5rem;
    padding-right: 1rem;
    ${down('lg', css`
      font-size: 1.0em;
    `)}
    
    ${down('md', css`
      font-size: 0.8em;
    `)}
    ${down('sm', css`
      font-size: 0.6em;
      border-bottom: .3rem solid black;
    `)}
`;

function Header(props) {
    return (
        <div>
            <Row >
                <Col>
                    <HeaderContainer>
                        <NavLink to="/">
                            <Logo1>Marbletown</Logo1>
                            <Logo2>Info</Logo2>
                        </NavLink>
                    </HeaderContainer>
                </Col>

            </Row>
            <Row>
                <Col mt={ {xs: 0, md:1} }>
                    <Typography fontSize={{xs: "0.8em",md: "1.0em"}} pt={0}>
                        <em>Providing insight into local politics of Marbletown, NY.</em>
                    </Typography>
                    <hr style={ {marginRight: "5rem"} }/>
                </Col>
            </Row>
        </div>
    );
}

export default Header;