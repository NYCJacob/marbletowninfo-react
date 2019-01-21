import React, { Component } from 'react'
import { Grid, Col, Row} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";
import OtherTowns from "./OtherTowns";
import AprilDraftLaw from "./AprilDraftLaw";
import EventTimeline from "./EventTimeline";
import SevReport from "./SevReport";
import Dissent from "./Dissent";

class EventLaw extends Component {
render(){
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
                                    "tabText": "Subcomm Report"},
                                {"route": "/proposedlaws/events/dissentreport",
                                    "tabText": "Dissent Report"}
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
                            exact path="/proposedlaws/events/othertowns"
                            component={OtherTowns}
                        />
                        <Route
                            exact path="/proposedlaws/events/timeline"
                            component={EventTimeline}
                        />
                        <Route
                            exact path="/proposedlaws/events/analysis"
                            component={SevReport}
                        /><Route
                        exact path="/proposedlaws/events/dissentreport"
                        component={Dissent}
                    />


                    </Col>

                </Row>
            </Grid>
        </div>
    )
}
}

export default EventLaw;