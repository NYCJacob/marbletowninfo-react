import React, { Component } from 'react'
import styled from "styled-components";
import { Grid, Col, Row } from '@smooth-ui/core-sc';

const StyledOtherTowns = styled.section`
@media screen and (max-width: 450px) {
    font-size: smaller;
}
  thead {
    border-bottom: 1px solid black;
  }
  tr:nth-child(even){background-color: #f2f2f2}
`;

class OtherTowns extends Component {
    render() {
        return(
            <StyledOtherTowns>
                <Grid>
                    <Row>
                        <Col>
                            <table>
                                <thead>
                                <tr>
                                    <th>Town</th>
                                    <th>Allows Comm Event Venue</th>
                                    <th>Use Table</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Hyde Park</td>
                                    <td>Allows "Rural event venue" in Greenbelt and Waterfront zones</td>
                                    <td><a
                                        href="https://www.ecode360.com/attachment/HY0660/HY0660-108a%20Sched%20of%20Use%20Regs.pdf">Use
                                        table</a></td>
                                    <td><a href="https://www.ecode360.com/9156272">event venue definition</a></td>
                                </tr>
                                <tr>
                                    <td>Town of Rhinebeck</td>
                                    <td>Allowed only in the Office Research Park District by SUP and requires a Site Plan approval
                                    </td>
                                    <td><a
                                        href="https://www.ecode360.com/attachment/RH0960/RH0960-125b%20Dist%20Sch%20Use%20Reg.pdf">Use
                                        table</a></td>
                                    <td><a href="https://www.ecode360.com/14086668"> Definition</a> and <a
                                        href="https://www.ecode360.com/14085108">definition</a></td>
                                </tr>
                                <tr>
                                    <td>Town of Coxackie</td>
                                    <td>Allows by SUP in the following Residential Districts: WR, RA-1, RA-2. Prohibits HDR-1 and
                                        HDR-2
                                    </td>
                                    <td>Commerical Event Defininition Section 201-97</td>
                                    <td><a href="https://ecode360.com/attachment/CO1196/CO1196-201a%20Sched%20A.pdf"> Use table</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Town of Rochester</td>
                                    <td>Allows "Commercial Events Facility in AR-3, AB-3, R-1, R-2, R-5, Hamlet, Business</td>
                                    <td><a href="http://townofrochester.ny.gov/files/2014/01/ZoningScheduleDec2014.Website.pdf">Use
                                        table</a></td>
                                    <td><a
                                        href="http://townofrochester.ny.gov/files/2014/01/zoningcodeDec2014.website.pdf">Definitions</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Town of Union Vale</td>
                                    <td>Prohibited</td>
                                    <td>notes</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Town of New Paltz</td>
                                    <td>Prohibited</td>
                                    <td>notes</td>
                                    <td>confirmed with New Paltz Building Dept.</td>
                                </tr>
                                <tr>
                                    <td>Town of Saugerties</td>
                                    <td>Prohibited</td>
                                    <td>note listed in use table</td>
                                    <td>no definition</td>
                                </tr>
                                <tr>
                                    <td>Town of Kingston</td>
                                    <td>Prohibited</td>
                                    <td>notes</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Town of Gardiner</td>
                                    <td>Not Specifically allow</td>
                                    <td><a href="http://www.townofgardiner.org/uploads/Gardiner%20Zon%20most%20recent.pdf"> SUP
                                        wording very open</a></td>
                                    <td>further research required</td>
                                </tr>
                                <tr>
                                    <td>Town of Marlborough</td>
                                    <td>Not Specifically allow</td>
                                    <td><a href="https://www.ecode360.com/8667157"> No seperate use table use and special uses
                                        listed Sec. 155-12 Use Regulations</a></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Town of Lloyd</td>
                                    <td>Not Specifically allow in use table or Special Use</td>
                                    <td>No seperate use table use</td>
                                    <td>https://ecode360.com/11033843</td>
                                </tr>
                                <tr>
                                    <td>Town of Plattekill</td>
                                    <td>Not Specifically allow in use table or Special Use</td>
                                    <td><a href="https://ecode360.com/9304571">No seperate use table use </a></td>
                                    <td>SUP may require renewal Sec. 110-60(E)</td>
                                </tr>
                                </tbody>
                            </table>

                        </Col>
                    </Row>
                </Grid>

            </StyledOtherTowns>
        )
}
}

export default OtherTowns;