import React from 'react'
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import { globalStyle, createGlobalStyle, Grid, Col, Row, Typography } from '@smooth-ui/core-sc';
const GlobalStyle = createGlobalStyle`${globalStyle()}`;



class CensusView extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://s3.amazonaws.com/embed.censusreporter.org/1.0/js/embed.chart.make.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <section>
                <Grid>
                    <Row>
                            <Typography variant="display-4" >
                                Marbletown, NY Census Data
                            </Typography>
                    </Row>
                </Grid>

                    <Grid style={{border: "solid 1px black"}}>
                        <Row>
                            <Col style={{paddingLeft:"1px"}}>
                                <Typography md="auto"><strong>Population:</strong>5,561</Typography>
                            </Col>
                            <Col>
                                <Typography md="auto"><strong>Sq. Miles:</strong>54.5</Typography>
                            </Col>
                            <Col>
                                <Typography md="auto"><strong>Population Density:</strong>102 per sq. mile</Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Typography><strong>Median Age:</strong> 46  slightly higher than Ulster County (43.4) and 20% higher than New York State (38.2)</Typography>
                        </Row>
                        <Row>
                            <Typography>
                                <strong>Per capita income:</strong> $37,465.  This is slightly higher than Ulster County ($31,760) and 10% higher than New York State.
                            </Typography>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row>
                            <Col>
                                <Iframe url="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=06000US3611145458&chartDataID=demographics-sex&dataYear=2016&releaseID=ACS_2016_5-year&chartType=pie&chartHeight=200&chartQualifier=&chartTitle=&initialSort=-value&statType=percentage"
                                        id="cr-embed-06000US3611145458-demographics-age-distribution_by_category"
                                        className="census-reporter-embed"
                                        styles={{ position: "relative", margin: ".5em", maxWidth: "45vw", width: "100%", height: "100%", minHeight: "300px" }}
                                />
                            </Col>
                            <Col>
                                <Iframe url="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=06000US3611145458&chartDataID=demographics-age-distribution_by_category&dataYear=2016&releaseID=ACS_2016_5-year&chartType=pie&chartHeight=200&chartQualifier=&chartTitle=Population+by+age+category&initialSort=-value&statType=percentage"
                                        id="cr-embed-06000US3611145458-demographics-age-distribution_by_category"
                                        className="census-reporter-embed"
                                        styles={{ position: "relative", margin: ".5em", maxWidth: "45vw", width: "100%", height: "100%", minHeight: "300px" }}
                                />
                            </Col>
                        </Row>
                    </Grid>

                    {/*second chart row*/}
                    <Grid>
                        <Row>
                            <Col>
                                <Iframe url="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=06000US3611145458&chartDataID=demographics-race&dataYear=2016&releaseID=ACS_2016_5-year&chartType=column&chartHeight=200&chartQualifier=Hispanic+includes+respondents+of+any+race.+Other+categories+are+non-Hispanic.&chartTitle=&initialSort=&statType=scaled-percentage"
                                        id="cr-embed-06000US3611145458-demographics-age-distribution_by_category"
                                        className="census-reporter-embed"
                                        styles={{ position: "relative", margin: "1em", maxWidth: "45vw", width: "100%", height: "100%", minHeight: "500px" }}
                                />
                            </Col>
                            <Col>
                                <Iframe url="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=06000US3611145458&chartDataID=demographics-age-distribution_by_decade-total&dataYear=2016&releaseID=ACS_2016_5-year&chartType=histogram&chartHeight=200&chartQualifier=&chartTitle=Population+by+age+range&initialSort=&statType=scaled-percentage"
                                        id="cr-embed-06000US3611145458-demographics-age-distribution_by_decade-total"
                                        className="census-reporter-embed"
                                        styles={{ position: "relative", margin: "1em", maxWidth: "45vw", height: "100%", minHeight: "500px"}}
                                />
                            </Col>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row>
                            <Iframe url="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=06000US3611145458&chartDataID=economics-income-household_distribution&dataYear=2016&releaseID=ACS_2016_5-year&chartType=histogram&chartHeight=200&chartQualifier=&chartTitle=Household+income&initialSort=&statType=scaled-percentage"
                                    className="census-reporter-embed"
                                    styles={{ position: "relative", margin: "1em", maxWidth: "45vw", height: "100%", minHeight: "300px"}}
                            />
                        </Row>
                    </Grid>
            </section>
        );
    }
}

export default CensusView;
