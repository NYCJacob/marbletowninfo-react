import React from "react";
import {Component} from "react";
import styled from "styled-components";
import { Grid, Col, Row} from '@smooth-ui/core-sc';

const  StyledDec2018LL2DraftLaw = styled.section`
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


.level-abc-subtitle {
  text-decoration: underline;
}

body {
    counter-reset: my-counter;
}

ol.roman-list {
    list-style-type: decimal;
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

class Dec2018LL2DraftLaw extends Component {
    render(){
        return(
            <StyledDec2018LL2DraftLaw>
                <Grid>
                    <Row>
                        <Col>
                            <article id="draft-law-content">
                                <section className="caption">
                                    <h1>LOCAL LAW No.___  of 2018</h1>
                                    <h2>DRAFT: Shuster Assoc. 10/3/18, 11/12/18, 11/16/18, and 12/4/18</h2>
                                    <h3>The text of Local Law No. 2 of 2018 is as follows:</h3>
                                </section>

                                <section id="section-1">
                                    <h1>SECTION I: SHORT TITLE AND PURPOSE</h1>
                                    <p>This Local Law is to be known as the <strong>Local Law 2018 #2 Accessory Apartments.</strong>
                                    This Law amends the Zoning Law to revise provisions of the <em>[as in original]</em></p>
                                </section>

                                <section id="section-2">
                                    <h1>SECTION II: LEGISLATIVE FINDINGS</h1>
                                    <p>The Town Board of the Town of Marbletown hereby adopts and makes the following findings:</p>
                                    <ol>
                                        <li>
                                            The Town Zoning Law is in need of revision to ensure compliance with the policies and objectives
                                            of the Town Comprehensive Plan and other related proposed and adopted in recent years.
                                            <em>[as in original]</em>
                                        </li>
                                    </ol>
                                </section>

                                <section id="section-3">
                                    <h1>SECTION III: 2018 AMENDMENTS</h1>
                                    <p>The Zoning Law of the Town of Marbletown shall be amended as follows:</p>
                                    <div>
                                        <h3><strong>Section A, Accessory Apartments</strong></h3>
                                        <ol className="roman-list">
                                            <li>
                                                <div>
                                                    Section 200-13. Terms Defined, Accessory Apartment, shall be amended to read as follows:
                                                </div>
                                                <p>ACCESSORY APARTMENT - A dwelling unit which does not exceed 700 square feet of floor
                                                area and is contained with the primary residential structure or an approved detached structure.</p>
                                                <p>Attached Structure any portion of the building that is within the footprint of the Principal Residence.
                                                A structure attached by a breezeway is considered attached.</p>
                                                <p>Detached structure- Any structure seperated from the Principal residence in a permanent way</p>
                                            </li>
                                            <li>
                                                Section200-46.D(15), Accessory Apartments shall be amended to read as follows:
                                                <p>"(15) Accessory apartments.  Apartments accessory to the principal permitted residential us of
                                                the same parcel are permitted in all districts, except the I-1 District, subject to a special use permit
                                                and the regulations and standard set forth below.  It is the intent of this provision to expand affordable
                                                housing opportunities in the Town, particularly for small families and senior citizens, to allow more efficient
                                                use of existing large structures, to provide expanded economic return to enable older homeowners to maintain their
                                                home and to provide options for live-in help or health providers."</p>
                                            </li>
                                        </ol>
                                        <ol className="level-abc">
                                            <li><span className="level-abc-subtitle">Minimum Lot Area</span>
                                                <p>[1] An accessory aparment located in the principal residence on the site and complying
                                                with the following standard shall be required to comply with the required minimum lot area
                                                of the zoning district in which it is located or be a pre-existing nonconforming lot
                                                but shall not require any additional lot area for the accessory apartment.  Only one
                                                dwelling unit per property shall be eligible for such provision.  Any additional dwelling
                                                units on the same property shall be subject to the provisions of Section 200-24.A.</p>
                                                <p>[2] A lot on which an accessory apartment is located in an approved detached structure shall comply
                                                with the required minimum lot area of the zoning district in which it is located plus an additional
                                                acre in the R-1, A-2, A-3 or A-4 District.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Owner Occupancy. </span>The owner of the property on which an accessory apartment is located must
                                                maintain a primary domicile in either the prinicipal residence or the accessory apartment on the subject property.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Status of Structure</span> An accessory apartment may only be located on a property where the principal residence
                                                has received a Certificate of Occupancy which is still valid at the time of application for an accessory apartment.</p>
                                            </li>
                                            <li><p><span className="level-abc-subtitle">Apartment Size</span>  The maximum floor area for an accessory apartment shall not exceed 700 square feet.
                                            The accessory apartment shall have no more than one bedroom.  The ZBA may modify, subject to appropriate conditions,
                                            the requirements of these regulations relative to the floor area of an accessory apartment where it determines that
                                            apartment size of more than 700 square feet is appropriate due to specific characteristics or features of the building,
                                            and when such increase will not adversely affect public health, safety and general welfare of the Town.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Number of Accessory Apartments.</span> There shall be no more than one accessory apartment per lot permitted
                                                under this subsection.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Exterior Appearance.</span> Alterations to the principal residence to accomodate an accessory apartment shall be
                                                designed to retain its exterior appearance as a single family dwelling, as viewed from the front yard.  No more than 100
                                                square feet may be added to the exterior of the structure in order to create an accessory apartment.  In a detached structure,
                                                the exterior of the structure shall retain a residential look from the street.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Water and Sewer Service</span> Prior to the issuance of a building permit for the establishment of an accessory apartment,
                                                approval of the proposed method of water supply and sewage disposal shall be obtained from the Ulster County Board of Health.</p>
                                            </li>
                                            <li>
                                                <p><span className="level-abc-subtitle">Off-street Parking</span> At least one additional off-street parking space shall be provided for the accessory apartment.
                                                In no case shall there be parking space for less athan a total of three cares on the property.</p>
                                            </li>
                                        </ol>
                                    </div>
                                </section>

                                <section id="section-4">
                                    <h1>SECTION IV: SEVERABILITY</h1>
                                    <p>The invalidity of any provision of this Local Law shall not affect the validity of any portion of this Local Law which can
                                    be given effect without such invalid provision</p>
                                </section>

                                <section id="section-5">
                                    <h1>SECTION V: EFFECTIVENESS</h1>
                                    <p>This law shall become effective upon filing with the Secretary of State.</p>
                                </section>
                            </article>
                        </Col>
                    </Row>
                </Grid>
            </StyledDec2018LL2DraftLaw>
        )
    }
}

export default Dec2018LL2DraftLaw;