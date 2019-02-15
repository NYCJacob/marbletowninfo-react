import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Helmet} from "react-helmet";
import { globalStyle, createGlobalStyle, styled, up, css, Grid, Col, Row } from '@smooth-ui/core-sc';
import Header from "./components/Header";
import OverlayHamburger from "./components/OverlayHamburger";
import ZoningMap from "./components/views/ZoningMap";
import TownBoard from "./components/views/TownBoard";
import CensusView from "./components/views/CensusView";
import EventLaw from "./components/views/EventLaw";
import Petition from "./components/views/Petition";
import AccAptStatus from "./components/views/AccAptStatus";
import Contact from "./components/views/Contact";
import SevReport from "./components/views/SevReport"
import Homepage from "./components/views/Homepage"

const NoMatch = () => <div><h3>This is not the page you were looking for.</h3></div>

const StyledHamburgerCol = styled(Col)`
  ${up('sm', css`
  display: none;
`)}
`;

class App extends Component {
  render() {
    return (
        <BrowserRouter>
                    <Grid style={ {
                        padding: "2rem",
                        border: "1px solid grey",
                        boxShadow: "0 2px 10px #000"
                    } }>
                        <Row ml={0}>
                            <Col xs={8} sm={12} md={12}>
                                <Header/>
                            </Col>
                            <StyledHamburgerCol xs={2} >
                                <OverlayHamburger/>
                            </StyledHamburgerCol>
                        </Row>
                            <Helmet>
                                <title>MarbletownInfo: local politics of Marbletown NY</title>
                            </Helmet>
                            <Switch>
                                <Route exact path="/sev" component={SevReport}/>
                                <Route path="/census" component={CensusView}/>
                                <Route path="/townboard" component={TownBoard}/>
                                <Route path="/proposedlaws/events" component={EventLaw}/>
                                <Route path="/petition" component={Petition}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/proposedlaws/accaptsup" component={AccAptStatus}/>
                                <Route exact path="/zoning" component={ZoningMap}/>
                                <Route exact path="/" component={Homepage}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        <Row style={ {marginTop: "1.5rem"} }>
                            <Col textAlign="center" fontSize={{xs: "0.75em",md: "0.9em"}}>
                                <footer>
                                    &#169; 2018-2019 FutureSense LLC
                                </footer>
                            </Col>
                        </Row>
                    </Grid>
        </BrowserRouter>
    );
  }
}

export default App;
