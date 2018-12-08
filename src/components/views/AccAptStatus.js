import React from "react";
import {Component} from "react";
import styled from "styled-components";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";
import { AccAptSupHtml } from "./NovLL2Markup"
import Dec2018LL2DraftLaw from "./Dec2018LL2DraftLaw"
import Nov2018LLTwo from "./Nov2018LLTwoproposed"
import NovLL2Markup from "./NovLL2Markup"

const  StyledAccAptStatus = styled.section`
`;

class AccAptStatus extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Typography variant="h2">2018 Zoning Law Revisions</Typography>
                        <Typography variant="p" lineHeight={1.6}>On November 20, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2 titled "A Local Law for 2018 to
                            the Town of Marbletown Zoning Law".</strong> This law proposes sweeping changes to the
                            zoning code including the following: Agriculture,
                            Accessory Apartments, Accessory Uses, Design Guidelines, Timing of Appeals, and Food
                            Services and Drinking Places.</Typography>
                        <Typography variant="p" lineHeight={1.6}>On December 4, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2018 #2 Accessory Apartments ".</strong>
                            This only included the accessory apartmens section from the first Local Law #2.
                        </Typography>
                    </Col>
                    <Col xs={12}>
                        <SubTabNav
                            tabConfig = {[
                                {"route": "/proposedlaws/accaptsup/",
                                    "tabText": "Dec 4 Draft"},
                                {"route": "/proposedlaws/accaptsup/2018november",
                                    "tabText": "Nov 20 Draft"},
                                {"route": "/proposedlaws/accaptsup/2018november/markup",
                                    "tabText": "Nov 20 v Current Law"},
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route
                            exact path="/proposedlaws/accaptsup/2018november"
                            component={Nov2018LLTwo}
                        />
                        <Route
                            exact path="/proposedlaws/accaptsup/"
                            component={Dec2018LL2DraftLaw}
                        />
                        <Route
                            exact path="/proposedlaws/accaptsup/2018november/markup"
                            component={NovLL2Markup}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AccAptStatus


