import React from 'react'
import { Box, Col, Row, Typography, styled, css, up, down } from '@smooth-ui/core-sc';

const StyledDivButton = styled.div`
.panel-button {
  font-size: 1.0rem;
  //background: #201c29;
  background: #40617F;
  border: 0px;
  box-shadow: 0 3px 15px #000;
  border-radius: 10px;
  padding: 0rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-button a {
  padding: 1.0rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    background: linear-gradient(to right, #90CCf4,#1c7fd5);
  }
}


`;

class Homepage extends React.Component {


    render() {
        return (
            <div>
                <Row justifyContent="space-around">
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography style={ {fontSize: "xx-large"}}>
                                        Zoning
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <div className="panel-button">
                                        <a href="#">
                                            <span style={{display: "block", color: "white"}}>Interactive zoning map</span>
                                            <i className="fal fa-map-marked" style={{color: "orange", fontSize: "6em"}}>
                                            </i>
                                        </a>
                                    </div>
                                </StyledDivButton>
                            </Row>

                        </Box>
                    </Col>
                    <Col>
                        <Row style={ {textAlign: "center"} }>
                            <Col>
                                <Typography fontSize="xx-large">
                                    Proposed Laws
                                </Typography>
                            </Col>
                        </Row>
                        <Row justifyContent="center">
                            <StyledDivButton>
                                <div className="panel-button">
                                    <a href="#">
                                        <span style={{display: "block", color: "white"}}>New laws being considered</span>
                                        <i className="fal fa-balance-scale-left" style={{color: "orange", fontSize: "6em"}}>
                                        </i>
                                    </a>
                                </div>
                            </StyledDivButton>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Town Board
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <div className="panel-button">
                                        <a href="#">
                                            <span style={{display: "block", color: "white"}}>Voting records and more...</span>
                                            <i className="fal fa-landmark" style={{color: "orange", fontSize: "10em"}}>
                                            </i>
                                        </a>
                                    </div>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                    <Col>
                        <Box >
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Petition
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <div className="panel-button">
                                        <a href="#">
                                            <span style={{display: "block", color: "white"}}>Make your voice heard!</span>
                                            <i className="fal fa-file-signature" style={{color: "orange", fontSize: "10em"}}>
                                            </i>
                                        </a>
                                    </div>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Statistics
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <div className="panel-button">
                                        <a href="#">
                                            <span style={{display: "block", color: "white"}}>Marbletown by the numbers</span>
                                            <i className="fal fa-tally" style={{color: "orange", fontSize: "10em"}}>
                                            </i>
                                        </a>
                                    </div>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                    <Col>
                        <Box>
                            <Row>
                                <Col style={ {textAlign: "center"} }>
                                    <Typography fontSize="xx-large">
                                        Contact Us!
                                    </Typography>
                                </Col>
                            </Row>
                            <Row justifyContent="center">
                                <StyledDivButton>
                                    <div className="panel-button">
                                        <a href="#">
                                            <span style={{display: "block", color: "white"}}>How we doing?</span>
                                            <i className="fal fa-bullhorn" style={{color: "orange", fontSize: "10em"}}>
                                            </i>
                                        </a>
                                    </div>
                                </StyledDivButton>
                            </Row>
                        </Box>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Homepage;
