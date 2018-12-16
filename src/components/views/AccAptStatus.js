import React from "react";
import {Component} from "react";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import SubTabNav from "../SubTabNav";
import {Route} from "react-router-dom";
import Dec2018LL2DraftLaw from "./Dec2018LL2DraftLaw"
import Nov2018LLTwo from "./Nov2018LLTwoproposed"
import NovLL2Markup from "./NovLL2Markup"
import Dec4LL2Markup from "./Dec4LL2Markup"

class AccAptStatus extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Typography variant="h2">2018 Zoning Law Revisions</Typography>
                        <Typography lineHeight={1.6}>On November 20, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2 titled "A Local Law for 2018 to
                            the Town of Marbletown Zoning Law".</strong> This law proposes sweeping changes to the
                            zoning code including the following: Agriculture,
                            Accessory Apartments, Accessory Uses, Design Guidelines, Timing of Appeals, and Food
                            Services and Drinking Places.</Typography><br/><br/>
                        <Typography lineHeight={1.6}>On December 4, 2018 the Marbletown Town Board introduced <strong>Local
                            Law 2018 #2 Accessory Apartments ".</strong>
                            This only included the accessory apartmens section from the first Local Law #2.
                        </Typography>
                        <hr/>
                    </Col>
                    <Col xs={12}>
                        <SubTabNav
                            tabConfig = {[
                                {"route": "/proposedlaws/accaptsup/",
                                    "tabText": "Dec 4 Draft"},
                                {"route": "/proposedlaws/accaptsup/2018decMarkup",
                                    "tabText": "Dec 4 - Current Law Markup"},
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
                            exact path="/proposedlaws/accaptsup/"
                            component={Dec2018LL2DraftLaw}
                        />
                        <Route
                            exact path="/proposedlaws/accaptsup/2018decMarkup"
                            component={Dec4LL2Markup}
                        />
                        <Route
                            exact path="/proposedlaws/accaptsup/2018november"
                            component={Nov2018LLTwo}
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


