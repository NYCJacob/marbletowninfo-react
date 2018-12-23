import React from 'react';
import { Grid, Row, Col, Typography, styled, css, down } from '@smooth-ui/core-sc'


const HeaderContainer = styled.h1`
* { box-sizing: border-box; }
    //margin-bottom: 0.5em;
    margin-top: .3em;
    margin-left: 0.3em;
    padding-bottom: 0;
    margin-bottom: 0;
`;

const Logo1 = styled.span`
* { box-sizing: border-box; }
    font-size: 1.5em;
    background-color: #FFCF00;
    color: #000000;
    border-bottom-color: #000000;
    border-radius: 10px 0px 0px 0px;
    border-bottom: .5rem solid;
    padding-left: 1rem;
    padding-right: .5rem;
    padding-top: .5rem;
    ${down('lg', css`
      font-size: 0.8em;
    `)}
    ${down('md', css`
      font-size: 0.6em;
    `)}
    ${down('sm', css`
      font-size: 0.4em;
      border-bottom: .3rem solid;
    `)}
`;

const Logo2 = styled.span`
* { box-sizing: border-box; }

    font-size: 1.5em;
    background-color: #40617F;
    color: #ffffff;
    border-bottom-color: #000000;
    border-radius: 0px 10px 0px 0px;
    border-bottom: .5rem solid black;
    padding-left: .5rem;
    padding-right: 1rem;
    padding-top: .5rem;
    ${down('lg', css`
      font-size: 0.8em;
    `)}
    
    ${down('md', css`
      font-size: 0.6em;
    `)}
    ${down('sm', css`
      font-size: 0.4em;
      border-bottom: .3rem solid black;
    `)}
`;


function Header(props) {
    return (
        <Grid>
            <Row>
                <Col>
                    <HeaderContainer>
                        <Logo1>Marbletown</Logo1>
                        <Logo2>Info</Logo2>
                    </HeaderContainer>
                </Col>

            </Row>
            <Row mt={1}>
                <Col>
                    <Typography fontSize={{xs: "0.8em",md: "1.0em"}} pt={3}>
                        <em>Providing insight into local politics of Marbletown, NY.</em>  <br/><em>Democracy starts in your backyard.</em>
                    </Typography>
                </Col>
            </Row>
        </Grid>

    );
}

export default Header;