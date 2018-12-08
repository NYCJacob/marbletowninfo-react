import React from "react";
import {Component} from "react";
import styled from "styled-components";
import {Grid, Col, Row} from '@smooth-ui/core-sc';

const StyledEventLaw = styled.section`
@media screen and (max-width: 450px) {
    font-size: smaller;
}

#draft-law-content {
  border-right: 1px solid black;
border-left: 1px solid black;
}

#draft-law .caption {
    border-bottom: solid black;
}

#draft-law h1 {
    font-size: 1.9rem !important;
}

#draft-law h2 {
    font-size: 1.5rem !important;
}

#draft-law h3 {
    font-size: 1.3rem !important;
}

#draft-law .level-A {

}

.level-ABC table, thead, th, td {
    border: solid 1px;
}

ol.level-ABC {
    list-style-type: upper-alpha;
}

ol.level-abc {
    list-style-type: lower-alpha;
}


body {
    counter-reset: my-counter;
}

ol.level-bracketed {
    list-style-type: none;
}


ol.level-bracketed li::before {
    font-weight: bold;
    counter-increment: my-counter;
    content: "[" counter(my-counter)"] ";
}

ol.roman-list {
    list-style-type: lower-roman;
}

ol.roman-list > li::before {
    content: none;
}

.level-bracketed-2 {
    list-style-type: none;
    counter-reset: my-counter2;
    list-style-type: none;
}

ol.level-bracketed-2 > li::before {
    font-weight: bold;
    counter-increment: my-counter2;
    content: "[" counter(my-counter2) "] ";
}

.level-bracketed-3 {
    list-style-type: none;
    counter-reset: my-counter3;
    list-style-type: none;
}

ol.level-bracketed-3 > li::before {
    font-weight: bold;
    counter-increment: my-counter3;
    content: "[" counter(my-counter3) "] ";
}
`

class Nov2018LLTwo extends Component {
    render() {
        return (
            <StyledEventLaw>
                <Grid>
                    <Row>
                        <Col>
                            <article id="draft-law-content">
                                <section className="caption">
                                    <h1>A LOCAL LAW No._____ </h1>
                                    <h1>Town of Marbletown</h1>
                                    <hr/>
                                    <h2><strong>DRAFT 10/3/18</strong>, REv 11/12/18 and 11/16/18 <em>Shuster
                                        Assoc.</em></h2>
                                    <h3>The text of proposed Local Law No. 2 of 2018 is as follows:</h3>
                                </section>

                                <section id="section-1">
                                    <h1>SECTION I: SHORT TITLE AND PURPOSE</h1>
                                    <p>This Local Law is to be known as the <strong>2018 Revisions to the Town of
                                        Marbletown Zoning Law.</strong>
                                        This Law amends the Zoning Law to revise provisions that have created
                                        difficulties of interpretation or implementation
                                        that, although minor in nature, have resulted in unnecessary effort or expense
                                        for the applicants and/or the Town;
                                        and/or that are inconsistent with State law or regulations.</p>
                                </section>

                                <section id="section-2">
                                    <h1>SECTION II: LEGISLATIVE FINDINGS</h1>
                                    <p>The Town Board of the Town of Marbletown hereby adopts and makes the following
                                        findings:</p>
                                    <ol>
                                        <li>The Town Zoning Law is in need of revision to ensure compliance with the
                                            policies and
                                            objectives of the Town Comprehensive Plan and other related plans proposed
                                            and adopted in recent years.
                                        </li>
                                        <li>The Zoning Law requires revision to comply with New York State Law.</li>
                                        <li>The Zoning Law requires revision to correct or clarify provisions that have
                                            caused delay or
                                            confusion in their administration, and to provide clearer standards and
                                            regulations for certain uses allowed.
                                        </li>
                                    </ol>
                                </section>
                                <section id="section-3">
                                    <h1>SECTION III: 2018 AMENDMENTS</h1>
                                    <h2>The Zoning Law of the Town of Marbletown shall be amended as follows:</h2>

                                    <div>
                                        <h1>Section A, Agriculture</h1>
                                        <ol className="level-ABC">
                                            <li>§208, Schedule of Use Regulations, designations under headings Crop
                                                Production and Animal Production shall be amended to read as follows:
                                                <table style={{fontSize: "80%"}}
                                                       width="100%">
                                                    <colgroup>
                                                        <col className="col1" width="1%"></col>
                                                        <col className="col2" width="3%"></col>
                                                        <col className="col3" width="7%"></col>
                                                        <col align="center" className="col4" width="8%"></col>
                                                        <col align="center" className="col5" width="7%"></col>
                                                        <col align="center" className="col6" width="7%"></col>
                                                        <col align="center" className="col7" width="8%"></col>
                                                        <col align="center" className="col8" width="6%"></col>
                                                        <col align="center" className="col9" width="7%"></col>
                                                        <col align="center" className="col10" width="7%"></col>
                                                        <col align="center" className="col11" width="8%"></col>
                                                        <col align="center" className="col12" width="7%"></col>
                                                        <col align="center" className="col13" width="8%"></col>
                                                        <col className="col14" width="16%"></col>
                                                    </colgroup>
                                                    <thead id="zones-header">
                                                    <tr className="">
                                                        <th className="entry borderRight borderBottom" colSpan="3"
                                                            startcol="1" valign="bottom">
                                                            <div className="para">Use</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="bottom">
                                                            <div className="para">A-2</div>
                                                            <div className="para">A-3</div>
                                                            <div className="para">A-4</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="bottom">
                                                            <div className="para">R1</div>
                                                            <div className="para">R2</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="bottom">
                                                            <div className="para">R-3</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="bottom">
                                                            <div className="para"><span>SR-E</span>
                                                            </div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="bottom">
                                                            <div className="para"><span>SR-N</span>
                                                            </div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="bottom">
                                                            <div className="para"><span>B1-E</span>
                                                            </div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="bottom">
                                                            <div className="para"><span>B1-N</span>
                                                            </div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="bottom">
                                                            <div className="para">B-2</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="bottom">
                                                            <div className="para">I-1</div>
                                                        </th>
                                                        <th align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="bottom">
                                                            <div className="para">IB</div>
                                                        </th>
                                                        <th className="entry borderBottom" startcol="14"
                                                            valign="bottom">
                                                            <div className="para">Supplementary Regulations</div>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Agriculture in Ag.
                                                                Dist.</b>

                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top" colSpan="2">
                                                        </td>

                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">

                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Crop
                                                                Production</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">

                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para">Crop production</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ 200-38</div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para">Temporary Greenhouses</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ 200-38</div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1" valign="top">
                                                            <div className="para">Roadside Farm Stand</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ 200-38 and 200-46D(1)</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1" valign="top">
                                                            <div className="para"><b className="bold">Animal production</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell" startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Keeping of Livestock (excluding feed
                                                                lots).
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ 200-38</div>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell" startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Commercial poultry and egg
                                                                production</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"><span>P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"><span >P</span></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§200-38</div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Noncommercial Keeping of Chickens &
                                                                Horses
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38C(3)(a)(b)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Accessory Farm
                                                                Uses</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para">
                                                                <ul>
                                                                    <li>u-pick</li>
                                                                    <li>Mazes</li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Farm Educational or Celebratory
                                                                Events
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38C(3)(a)(b)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="new outsideAg">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">OUTSIDE AG.
                                                                DIST.</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Crop
                                                                Production</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Crop Production</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Temporary Greenhouses</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><span >Roadside Farm Stand</span><span
                                                                ><b className="bold">Road stand</b> (roadside farm stand)</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"><span
                                                                >SU</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"><span
                                                                >SU</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"><span
                                                                >X</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"><span
                                                                >X</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"><span
                                                                >X</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"><span
                                                                >X</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"><span
                                                                >SU</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"><span
                                                                >X</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"><span
                                                                >SU</span><span
                                                                >P</span>
                                                            </div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§§ <a className="xref" guid="6184053"
                                                                                        href="6184053#6184053">200-38</a>
                                                                and <a className="xref" guid="6184245"
                                                                       href="6184245#6184245">200-46D(1)</a></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Animal
                                                                Production</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Agriculture (including the keeping of
                                                                farm animals):
                                                            </div>
                                                            <div className="para">Animal production: cattle ranching and
                                                                farming EXCEPT
                                                                "cattlefeed
                                                                lots; hog and pig farming; sheep and goat farming;
                                                                horses and equines;
                                                                apiaries; and production of companion animals (breeding
                                                                kennels)
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Keeping of Livestock (excluding feed
                                                                lots). See livestock
                                                                definition for list of animals
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38(C)(1)(2)
                                                                &200-13</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="moved">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Commercial poultry and egg
                                                                production
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Noncommercial keeping of Chickens and
                                                                Horses
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="moved">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Lab Animal Production</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184053"
                                                                                       href="6184053#6184053">200-38</a>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Forestry and
                                                                logging</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>


                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Support activities
                                                                for agriculture and
                                                                forestry</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">No Changes</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>


                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Mining</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">UTILITIES
                                                                USES:</b></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Electric power
                                                                generation; power plants</b>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top" colSpan="8">
                                                            <div className="para"><span >NO CHANGES</span>
                                                            </div>
                                                        </td>

                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ 200-40D(7)</div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">CONSTRUCTION
                                                                USES:</b><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">MANUFACTURING
                                                                USES:</b><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">RETAIL TRADE
                                                                USES:</b><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">TRANSPORTATION AND
                                                                WAREHOUSING USES:</b><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead" startcol="1" valign="top">
                                                            <div className="para">
                                                                <b className="bold">INFORMATION SERVICES USES:</b><span
                                                                >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">FINANCE AND
                                                                INSURANCE; AND REAL ESTATE AND
                                                                RENTAL AND
                                                                LEASING SERVICES USES:</b></div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">PROFESSIONAL,
                                                                SCIENTIFIC, AND TECHNICAL
                                                                SERVICES; MANAGEMENT
                                                                OF COMPANIES AND ENTERPRISES; AND ADMINISTRATIVE AND
                                                                SUPPORT AND WASTE
                                                                MANAGEMENT AND REMEDIATION SERVICES USES:</b><span
                                                                >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">EDUCATIONAL
                                                                SERVICES; HEALTH CARE AND SOCIAL
                                                                ASSISTANCE USES:</b><span >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">ARTS,
                                                                ENTERTAINMENT, AND RECREATION USES:</b><span
                                                                >NO CHANGES</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">ACCOMMODATION AND
                                                                FOOD SERVICES USES:</b>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Accommodation</b>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Traveler
                                                                accommodation</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Hotel, as defined in Article <a
                                                                className="xref" guid="6184705"
                                                                href="6184705#6184705">IV</a>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184255"
                                                                                       href="6184255#6184255">200-46D(3)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Motel, as defined in Article <a
                                                                className="xref" guid="6184705"
                                                                href="6184705#6184705">IV</a>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184255"
                                                                                       href="6184255#6184255">200-46D(3)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Resort hotel, resort ranch or resort
                                                                lodge, as defined in
                                                                Article <a className="xref" guid="6184705"
                                                                           href="6184705#6184705">IV</a></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184255"
                                                                                       href="6184255#6184255">200-46D(3)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Other traveler accommodation</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184255"
                                                                                       href="6184255#6184255">200-46D(3)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">RV (recreational vehicle) parks and
                                                                recreational camps
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§§ <a className="xref" guid="6184259"
                                                                                        href="6184259#6184259">200-46D(4)</a>
                                                                and <a className="xref" guid="6184283"
                                                                       href="6184283#6184283">200-46D(8)</a></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Rooming and
                                                                boarding houses</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Bed-and-breakfast and boardinghouse,
                                                                as defined in Article <a
                                                                    className="xref" guid="6184705"
                                                                    href="6184705#6184705">IV</a></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184264"
                                                                                       href="6184264#6184264">200-46D(5)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Dormitory, as defined in Article <a
                                                                className="xref"
                                                                guid="6184705"
                                                                href="6184705#6184705">IV</a>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184264"
                                                                                       href="6184264#6184264">200-46D(5)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Food services and
                                                                drinking places</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell" startcol="1" valign="top">
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Full-service restaurants
                                                                <span >; and limited-service eating places,
                            excluding fast-food restaurants and drive-in restaurants as defined in Article IV</span>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"><span >SU</span>
                                                                <span >SP</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"><span >SP</span>
                                                                <span >SU</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"><span >SU</span>
                                                                <span >X</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"><span >SU</span>
                                                                <span >X</span></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Limited Service Restaurants</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184128"
                                                                                       href="6184128#6184128">200-40</a>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Drinking Places</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184128"
                                                                                       href="6184128#6184128">200-40</a>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr >
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Fast food & Drive-in Restaurant</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184128"
                                                                                       href="6184128#6184128">200-40</a>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Special food services</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"><span
                                                                >SP</span><span
                                                                >SU</span></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184128"
                                                                                       href="6184128#6184128">200-40</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Drinking places (alcoholic
                                                                beverages)
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">OTHER SERVICES
                                                                (EXCEPT PUBLIC ADMINISTRATION)
                                                                USES:</b>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Repair and
                                                                maintenance</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Automotive repair
                                                                and maintenance</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Car washes</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Automotive repair and maintenance
                                                                other than car washes
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184311"
                                                                                       href="6184311#6184311">200-46D(14)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Electronic and
                                                                precision equipment repair and
                                                                maintenance;
                                                                commercial and industrial machinery and equipment
                                                                (except automotive
                                                                and electronic) repair and maintenance; and personal and
                                                                household
                                                                goods repair and maintenance:</b> office, enclosed
                                                                workshop; with
                                                                no open storage of goods, materials or equipment
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Open storage or
                                                                repair of goods, materials or
                                                                equipment</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Personal and
                                                                laundry services</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Personal care services; and other
                                                                personal services, not
                                                                including
                                                                pet care (except veterinary) services: photofinishing
                                                                services, and
                                                                commercial parking lots and garages
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Pet care (except veterinary) services;
                                                                boarding kennels
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Other nonveterinary pet care</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Photofinishing laboratories</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§§ <a className="xref" guid="6184142"
                                                                                        href="6184142#6184142">200-40D</a>
                                                                and <a className="xref" guid="6184134"
                                                                       href="6184134#6184134">C</a></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Commercial parking lots and garages
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§§ <a className="xref" guid="6184052"
                                                                                        href="6184052#6184052">200-37</a>
                                                                and <a className="xref" guid="6184114"
                                                                       href="6184114#6184114">200-39D</a>, <a
                                                                    className="xref" guid="6184126"
                                                                    href="6184126#6184126">H</a> and <a className="xref"
                                                                                                        guid="6184127"
                                                                                                        href="6184127#6184127">I</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Funeral homes and funeral services
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Cemetery</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184234"
                                                                                       href="6184234#6184234">200-44</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Crematory</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Dry-cleaning and laundry services:
                                                                dry-cleaning pick-up
                                                                establishments
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Religious,
                                                                grantmaking, civic and similar
                                                                organizations:
                                                                religious organizations</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Church or other house of worship</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Grantmaking and giving services;
                                                                social advocacy
                                                                organizations;
                                                                business, professional, labor, political, and similar
                                                                organizations
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Civic and social organizations,
                                                                including operation and
                                                                leasing
                                                                of meeting halls and similar places of public assembly
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Private household
                                                                services</b> (conducted
                                                                accessory
                                                                to an existing residence)
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry subHead borderBottom"
                                                            colSpan="14" spanname="subHead"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">PUBLIC
                                                                ADMINISTRATION USES:</b></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Federal, state,
                                                                county and municipal
                                                                government offices;
                                                                Fire Department; Town highway garage</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Public parks and
                                                                playgrounds</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderBottom" colSpan="14"
                                                            startcol="1" valign="top">
                                                            <div className="para"><b className="bold">ACCESSORY
                                                                USES:</b></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Uses accessory to
                                                                residential uses</b></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Customary home occupation, as defined
                                                                in Article <a
                                                                    className="xref" guid="6184705"
                                                                    href="6184705#6184705">IV</a></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184033"
                                                                                       href="6184033#6184033">200-30</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory apartment, as defined in
                                                                Article <a className="xref"
                                                                           guid="6184705"
                                                                           href="6184705#6184705">IV</a>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184314"
                                                                                       href="6184314#6184314">200-46D(15)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Stables for horses (noncommercial)
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory use customarily incident to
                                                                any of the uses
                                                                mentioned
                                                                herein, and on the same lot
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory use customarily incident to
                                                                any of the uses
                                                                mentioned
                                                                herein, and not on the same lot
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184239"
                                                                                       href="6184239#6184239">200-46C</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory storage or maintenance barn
                                                                or shed
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§§ <a className="xref" guid="6184049"
                                                                                        href="6184049#6184049">200-34</a>
                                                                and <a className="xref" guid="6184006"
                                                                       href="6184006#6184006">200-22D</a></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory parking and/or loading, as
                                                                required
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184072"
                                                                                       href="6184072#6184072">200-39</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Small-scale solar generating systems
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry borderRight borderBottom"
                                                            colSpan="3" startcol="1"
                                                            valign="top">
                                                            <div className="para"><b className="bold">Uses accessory to
                                                                nonresidential uses</b>
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory storage or maintenance barn
                                                                or shed
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184049"
                                                                                       href="6184049#6184049">200-34</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Accessory parking and/or loading, as
                                                                required, on a lot
                                                                adjacent
                                                                to the nonresidential use
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para">§ <a className="xref" guid="6184117"
                                                                                       href="6184117#6184117">200-39D(3)</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Parish house or meeting hall, study,
                                                                rectory and/or
                                                                parsonage,
                                                                accessory to any church or house of worship
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Dwellings for transient labor employed
                                                                by active agricultural
                                                                uses
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para">X</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SU</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Access to public recreation
                                                                facilities
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Parking for public recreation
                                                                facilities
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left"
                                                            className="entry blankCell borderRight borderBottom"
                                                            spanname="blankCell"
                                                            startcol="1" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left"
                                                            className="entry blankCell2 borderRight borderBottom"
                                                            colSpan="2"
                                                            spanname="blankCell2" startcol="2" valign="top">
                                                            <div className="para">Data storage</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="4" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="5" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="6" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="7" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="8" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="9" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="10" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="11" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="12" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="center" className="entry borderRight borderBottom"
                                                            startcol="13" valign="top">
                                                            <div className="para">SP</div>
                                                        </td>
                                                        <td align="left" className="entry borderBottom" startcol="14"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="">
                                                        <td align="left" className="entry blankCell borderRight"
                                                            spanname="blankCell" startcol="1"
                                                            valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                        <td align="left" className="entry blankCell2 borderRight"
                                                            colSpan="2" spanname="blankCell2"
                                                            startcol="2" valign="top">
                                                            <div className="para">Small-scale solar generating systems
                                                            </div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="4"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="5"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="6"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="7"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="8"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="9"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="10"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="11"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="12"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="center" className="entry borderRight" startcol="13"
                                                            valign="top">
                                                            <div className="para">P</div>
                                                        </td>
                                                        <td align="left" className="entry" startcol="14" valign="top">
                                                            <div className="para"></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>




    </li>
                                        </ol>
                                    </div>
                                </section>

                            </article>
                        </Col>
                    </Row>
                </Grid>
            </StyledEventLaw>
        )
    }
}

export default Nov2018LLTwo;