import React, { Component } from 'react'
import styled from "styled-components";
import { Grid, Col, Row} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";
import OtherTowns from "./OtherTowns";
import AprilDraftLaw from "./AprilDraftLaw";

// const OtherTown = () => <h1>other towns</h1>

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
                                {"route": "/eventlaw/draftlaw",
                                    "tabText": "Draft Law"},
                                {"route": "/eventlaw/othertowns",
                                    "tabText": "Other Towns Compared"},
                                {"route": "/eventlaw/eventlawtimeline",
                                    "tabText": "Event Law Timeline"}
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route
                            path="/eventlaw/draftlaw"
                            component={AprilDraftLaw}
                        />
                        <Route
                            path="/eventlaw/othertowns"
                            component={OtherTowns}
                        />

                    </Col>

                </Row>
            </Grid>
        </div>
    )
}
}

export default EventLaw;