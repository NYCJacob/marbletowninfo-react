import React, { Component } from 'react'
import styled from "styled-components";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";
import OtherTowns from "./OtherTowns";
import AprilDraftLaw from "./AprilDraftLaw";
import EventTimeline from "./EventTimeline";
import EventAnaylsis from "./EventAnalysis";

const analysis = () => <h1>coming soon!</h1>

class EventLaw extends Component {
render(){
    console.log(this.props);
    return(
        <div>
            <Grid>
                <Row>
                    <Col>
                        <SubTabNav
                            tabConfig = {[
                                {"route": "/proposedlaws/events",
                                    "tabText": "Draft Law"},
                                {"route": "/proposedlaws/events/othertowns",
                                    "tabText": "Other Towns"},
                                {"route": "/proposedlaws/events/timeline",
                                    "tabText": "Timeline"},
                                {"route": "/proposedlaws/events/analysis",
                                    "tabText": "Analysis"}
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route
                            exact path="/proposedlaws/events"
                            component={AprilDraftLaw}
                        />
                        <Route
                            path="/proposedlaws/events/othertowns"
                            component={OtherTowns}
                        />
                        <Route
                            path="/proposedlaws/events/timeline"
                            component={EventTimeline}
                        />
                        <Route
                            path="/proposedlaws/events/analysis"
                            component={EventAnaylsis}
                        />

                    </Col>

                </Row>
            </Grid>
        </div>
    )
}
}

export default EventLaw;