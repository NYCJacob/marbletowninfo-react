import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Helmet} from "react-helmet";
import { globalStyle, createGlobalStyle, styled, up, css, Grid, Col, Row} from '@smooth-ui/core-sc';
import Header from "./components/Header";
import TabNav from "./components/TabNav";
import OverlayHamburger from "./components/OverlayHamburger";
import ZoningMap from "./components/views/ZoningMap";
import TownBoard from "./components/views/TownBoard";
import CensusView from "./components/views/CensusView";
import EventLaw from "./components/views/EventLaw";
import Petition from "./components/views/Petition";
import AccAptStatus from "./components/views/AccAptStatus";
import Contact from "./components/views/Contact";
import SevReport from "./components/views/SevReport"

const NoMatch = () => <div><h3>This is not the page you were looking for.</h3></div>
const GlobalStyle = createGlobalStyle`${globalStyle()}`;

const StyledHamburgerCol = styled(Col)`
  ${up('sm', css`
  display: none;
`)}
`;

class App extends Component {
  render() {
    return (
        <BrowserRouter>
                    <Grid>
                        <Row ml={0}>
                            <Col xs={8} sm={12} md={12}>
                                <Header/>
                            </Col>
                            <StyledHamburgerCol xs={2} mt={4} >
                                <OverlayHamburger/>
                            </StyledHamburgerCol>
                        </Row>
                        <Row>
                            <Col xs="auto">
                                <TabNav/>
                            </Col>
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
                                <Route exact path="/" component={ZoningMap}/>
                                <Route component={NoMatch}/>
                            </Switch>
                    </Grid>
        </BrowserRouter>
    );
  }
}

export default App;
