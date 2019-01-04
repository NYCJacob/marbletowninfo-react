import React from 'react'
import Iframe from 'react-iframe';
import { Grid, Col, Row, Typography } from '@smooth-ui/core-sc';



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
                                Marbletown by the Numbers
                            </Typography>
                    </Row>
                </Grid>

                    <Grid style={{border: "solid 1px black", lineHeight: "1.5"}}>
                        <Row>
                            <Col style={{paddingLeft:"1px"}}>
                                <Typography md="auto"><strong>Population:</strong>5,561</Typography>
                            </Col>
                            <Col>
                                <Typography md="auto"><strong>Sq. Miles:</strong>54.5</Typography>
                            </Col>
                            <Col>
                                <Typography md="auto"><strong>Pop. Density:</strong>102 per sq. mile</Typography>
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
                        <Row>
                            <Typography>
                                <em>Data based on 2016 census 5 year data release.</em>
                            </Typography>
                        </Row>
                        <hr/>
                        <Row>
                            <Typography style={ {lineHeight: "1.5"}}>
                                <strong>Farms/Agricultural Tax Assements:</strong> There are approximately 12 agricultural operations in Marbletown based on 2018 listings published by the
                                Roundout Grower's Association.  This compares to 125 properties receiving agriculture tax assessments.
                            </Typography>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row style={{border: "solid 1px black"}}>
                            <Typography>

                                <table>
                                    <caption><strong>Marbletown Top 15 Landowners based on acreage.</strong></caption>
                                    <tbody>
                                        <tr>
                                            <th>Total Acres (based on 2018 tax roll)</th>
                                            <th>Owner Name</th>
                                        </tr>
                                        <tr>
                                            <td>2245</td>
                                            <td>Mohonk Preserve Inc</td>
                                        </tr>
                                        <tr>
                                            <td>562</td>
                                            <td>Smiley Bros Inc (Smiley family founded Mohonk Preserve</td>
                                        </tr>
                                        <tr>
                                            <td>477</td>
                                            <td>Green Acres HMR LLC</td>
                                        </tr><tr>
                                            <td>440</td>
                                            <td>City of New York- DEP</td>
                                        </tr><tr>
                                            <td>331</td>
                                            <td>Davenport Realty LLC (Davenport family also own significant acreage)</td>
                                        </tr><tr>
                                            <td>301</td>
                                            <td>Donald Schupak (Anjes Farm)</td>
                                        </tr><tr>
                                            <td>296</td>
                                            <td>Aldarosi Enterprises Inc.  (Allan Harari)</td>
                                        </tr>
                                        <tr>
                                            <td>286</td>
                                            <td>Harry Hansen</td>
                                        </tr>
                                        <tr>
                                            <td>261</td>
                                            <td>DDG Industries LLC</td>
                                        </tr>
                                        <tr>
                                            <td>242</td>
                                            <td>RLMD Realty LLC</td>
                                        </tr>
                                        <tr>
                                            <td>238</td>
                                            <td>Severyn Hasbrouck Jr.</td>
                                        </tr>
                                        <tr>
                                            <td>231</td>
                                            <td>Upstate 72 LLC</td>
                                        </tr>
                                        <tr>
                                            <td>198</td>
                                            <td>Province of Meribah Society</td>
                                        </tr>
                                        <tr>
                                            <td>178</td>
                                            <td>William & Simone Husta</td>
                                        </tr>
                                        <tr>
                                            <td>169</td>
                                            <td>Claude Osterhoudt</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </Typography>
                        </Row>
                        <Row>
                            <Typography variant="display-4" >
                                Marbletown Census Data
                            </Typography>
                        </Row>
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
