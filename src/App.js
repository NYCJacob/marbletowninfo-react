import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Helmet} from "react-helmet";
import { Grid, Col, Row} from '@smooth-ui/core-sc';
import Header from "./components/Header";
import TabNav from "./components/TabNav";
import OverlayHamburger from "./components/OverlayHamburger";
import ZoningMap from "./components/views/ZoningMap";
import TownBoard from "./components/views/TownBoard";
import CensusView from "./components/views/CensusView";
import EventLaw from "./components/views/EventLaw";
import Petition from "./components/views/Petition";
// import ProposedAccAptSup from "./components/views/ProposedAccAptSup";
import AccAptStatus from "./components/views/AccAptStatus";
import Contact from "./components/views/Contact";
import LocalLawTwo from "./components/views/Nov2018LLTwoproposed";
import SevReport from "./components/views/SevReport"


const NoMatch = () => <div><h3>This is not the page you were looking for.</h3></div>


class App extends Component {
  render() {
    return (
        <BrowserRouter>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={8} md={10}>
                                <Header/>
                            </Col>
                            <Col xs={6} sm={4} md={2}>
                                <OverlayHamburger/>
                            </Col>
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
                                <Route exact path="/" component={ZoningMap}/>
                                <Route exact path="/sev" component={SevReport}/>
                                <Route path="/census" component={CensusView}/>
                                <Route path="/townboard" component={TownBoard}/>
                                <Route path="/proposedlaws/events" component={EventLaw}/>
                                <Route path="/petition" component={Petition}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/proposedlaws/accaptsup" component={AccAptStatus}/>
                                <Route component={NoMatch}/>
                            </Switch>
                    </Grid>
        </BrowserRouter>
    );
  }
}

export default App;
