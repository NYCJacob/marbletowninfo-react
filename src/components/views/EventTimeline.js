import React, { Component } from 'react'
import styled from "styled-components";
import { Grid, Col, Row, Typography } from '@smooth-ui/core-sc';

const StyledEventTimeline = styled.section`
  @media screen and (max-width: 450px) {
    font-size: smaller;
    ul {
          padding-left: 0.1em;
    }
    dd {
          padding-left: 0.1em;
    }
}
`

class EventTimeline extends Component{
    render() {
        return(
            <StyledEventTimeline>
                <Grid>
                    <Row>
                        <Col>
                            <Typography variant="h2">
                                Marbletown Event Law/SUP Controversy Timeline
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <dl>
                                <dt>
                                    <strong>July 13, 2016</strong>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>3805 Stone Ridge Inn LLC (Hasbrouck House) is granted SUP to hold tent events for up to 12 catered events in a season</li>
                                        <li>Zoning Board Appeals states use allowed in B-1 under Limited Service Eating Establishment (Marbletown Code 200:17)</li>
                                        <li>Zone B-1 and R-3/SR??</li>
                                        <li>35 acres</li>
                                    </ul>
                                </dd>
                                <dt>
                                    <strong>October 24, 2017</strong>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>Mr. Brownlie of __ Mill Dam Road files for Zoning Permit Application is approved but referred to ZBA for SUP</li>
                                        <li>Use classification: Limited Service Eating for Catered Wedding Events  (page 200:21 town code Section 200-8 “Limited Service Eating Place”)</li>
                                        <li>Zone R-1, New York State Agriculture Distric</li>
                                        <li>80 acres</li>
                                    </ul>
                                </dd>
                                <dt>
                                    <strong>December 4, 2017</strong>
                                </dt>
                                <dd>
                                    <ul>Mr. Brownlie files SUP application</ul>
                                </dd>
                                <dt>
                                    <strong>February 12, 2018</strong>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>Appeal of Mr. Brownlie zoning permit filed by neighbors</li>
                                    </ul>
                                </dd>
                                <dt>
                                    <strong>February 24, 2018</strong>
                                </dt>
                                <dd>
                                    <dt>A. New Beginnings Farmstead ("NB") granted SUP by Marbletown Zoning Board of Appeals</dt>
                                    <dd>
                                        <ul>
                                            <li>SUP granted for “Limited Service Eating Establishment for Catered Events”</li>
                                            <li>Zone R-1/ NYS Ag Dist.</li>
                                            <li>125+ Acres</li>
                                        </ul>
                                    </dd>
                                    <dt>B. Rockcliff House files SUP application for residence, B&B, two "limited service eating establishments, retail shop, municipal parking and event venue.</dt>
                                    <dd>
                                        <ul>
                                            <li>Zoned B-1</li>
                                            <li>4 acres</li>
                                        </ul>
                                    </dd>
                                </dd>
                                <dt>
                                    <strong>April 27, 2018</strong>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>Marbletown ZBA decision on appeal of Brownlie zoning permit application is overturned.</li>
                                        <li>Basic reasoning is “limited eating establishment” undefined in town code, looking at  trade publications,
                                            namely NAICS, commercial venue cannot be considered and eating establishment.  Specifically states no
                                            determination on wedding events in any other zone.</li>
                                    </ul>
                                </dd>
                                <dt>
                                    <strong>May 1, 2018</strong>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>Town Supervisor announces intention to create a subcommittee for the creation of a draft law on event spaces.</li>
                                    </ul>
                                </dd>

                            </dl>


                        </Col>
                    </Row>

                </Grid>

            </StyledEventTimeline>
        )
    }
}

export default EventTimeline