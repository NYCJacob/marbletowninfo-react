import React from "react";
import {Component} from "react";
import styled from "styled-components";
import { Grid, Col, Row} from '@smooth-ui/core-sc';

const  StyledEventLaw = styled.section`
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

class AprilDraftLaw extends Component {
    render(){
        return(
            <StyledEventLaw>
                <Grid>
                    <Row>
                        <Col>
                            <article id="draft-law-content">
                                <section className="caption">
                                    <h1>A LOCAL LAW AMENDING CHAPTER 200 OF THE TOWN CODE, ZONING</h1>
                                    <h2>SECOND DRAFT: Shuster Assoc. (Revised 4/24/18)</h2>
                                    <h3>The text of Local Law No. of 2018 is as follows:</h3>
                                </section>

                                <section id="section-1">
                                    <h1>SECTION I: SHORT TITLE</h1>
                                    <p>This Local Law shall be entitled 'Special Event Venues", which amends the
                                        Schedule of Use Regulations, Definitions and the Special Use Permit sections
                                        of the CODE of the Town of Marbletown, CHAPTER 200, ZONING.</p>
                                </section>

                                <section id="section-2">
                                    <h1>SECTION II: LEGISLATIVE AUTHORITY, PURPOSE AND FINDINGS</h1>
                                    <p>This law is adopted pursuant to New York State Town Law, which authorizes the
                                        Town Board to adopt zoning laws that protect the health, safety and welfare
                                        of residents and the general public, and are in accordance with the Town's
                                        Comprehensive Plan. The Town of Marbletown wishes to encourage economic
                                        development and tourism and preservation of open space and natural resources
                                        in accordance with the goals of its Comprehensive Plan and finds that the
                                        occasional use of properties in various zoning districts for special event
                                        venues is consistent with such goals. This law provides standards and
                                        procedures for the location and operation of special event venues, where
                                        permitted, to ensure that the health, safety, and welfare of the Town and
                                        its residents is adequately protected.</p>
                                </section>

                                <section id="section-3">
                                    <h1>SECTION III: ZONING LAW AMENDMENTS</h1>
                                    <h2>Chapter 200, Zoning, shall be amended as follows:</h2>

                                    <div>
                                        <ol className="level-ABC">
                                            <li>
                                                <div>5200-8, Schedule of Use Regulations, shall be amended by
                                                    addition of a new sub-section, "Special Events Venue" under the
                                                    section titled " ARTS, ENTERTAINMENT AND RECREATION " as a use
                                                    permitted upon approval of a special use permit by the Zoning
                                                    Board of Appeals, as follows:
                                                </div>
                                                <div>
                                                    <table className="table table-responsive-sm">
                                                        <thead>
                                                        <tr>
                                                            <td colSpan="12">ARTS, ENTERTAINMENT AND RECREATION</td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Supplementary Regulations</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Special Event Venue</td>
                                                            <td></td>
                                                            <td>SU</td>
                                                            <td>X</td>
                                                            <td>X</td>
                                                            <td>X</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>X</td>
                                                            <td></td>
                                                            <td>200-46D(18)</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </li>
                                            <li>
                                                <div>5200-13 is hereby amended to add the following definition:
                                                </div>
                                                <div>SPECIAL EVENTS VENUE —The limited use of a parcel or part of a
                                                    parcel of land, for celebratory, cultural or educational
                                                    activities such as concerts, conferences, banquets, festivals,
                                                    weddings, or other similar activities, subject to the standards
                                                    and criteria set forth in 5200-46 D.(18). Permitted activities
                                                    at such venues shall not include retail sale of new or used
                                                    merchandise.
                                                </div>

                                            </li>
                                            <li>
                                                <div>5200-46.D. is hereby amended to add a new section, D.(18), to
                                                    read as follows:
                                                </div>
                                                <div>
                                                    <ol className="level-abc">(18) Special Events Venue
                                                        <li>
                                                            <div>Development and Operational Standards</div>
                                                            <ol className="level-bracketed">
                                                                <li>Access: A special event venue shall have direct
                                                                    access from a NY State or Ulster County highway
                                                                    or another publically maintained road which has
                                                                    at least two outlets.
                                                                </li>
                                                                <li>Parcel Size and Buffer: The parcel to be used as
                                                                    a special event venue shall have an area of at
                                                                    least acres. An undisturbed buffer of at least
                                                                    25() feet shall be maintained within the
                                                                    perimeter of a property used as a special event
                                                                    venue, excluding access drives.
                                                                </li>
                                                                <li>Frequency: The frequency and duration of events
                                                                    shall be as follows:
                                                                    <ol className="roman-list">
                                                                        <li>No more than 10 events shall be
                                                                            conducted in one calendar year.
                                                                        </li>
                                                                        <li>No more than two events shall be
                                                                            conducted in one calendar month.
                                                                        </li>
                                                                        <li>There shall be an interval of at least
                                                                            five days between events.
                                                                        </li>
                                                                        <li>Each event shall have duration of no
                                                                            longer than five hours and take place
                                                                            between 10 AM and 10 PM.
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                                <li>Maximum Attendance: The maximum guest attendance
                                                                    allowed at any special event, excluding staff or
                                                                    service personnel, shall not exceed people on
                                                                    site at any time.
                                                                </li>
                                                                <li>Accommodations: No accommodations, such as
                                                                    hotels, camp sites, recreational vehicle parks
                                                                    or similar uses shall be permitted on a special
                                                                    event venue site unless a separate special use
                                                                    permit has been granted for such accommodations
                                                                    in accord with the relevant provisions of this
                                                                    Law.
                                                                </li>
                                                                <li>Noise and Lighting Levels: At no time during an
                                                                    event shall noise levels exceed a level of dBa
                                                                    at the "Sound Level Control Point" established
                                                                    during the required "Sound Test." See (b)[4] vii
                                                                    below. Lighting levels shall not exceed 2 foot
                                                                    candles at the property boundary and shall
                                                                    produce no glare on adjacent property or
                                                                    roadways.
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li>Submission requirements
                                                            <ol className="level-bracketed-2">
                                                                <li>The applicant shall submit all data required to
                                                                    apply for a special use permit as set forth in
                                                                    5200-75 herein. The Zoning Board of Appeals may
                                                                    waive the submission of data not deemed relevant
                                                                    to the application.
                                                                </li>
                                                                <li>Site Visit: Prior to formal submission of an
                                                                    application, a Site Visit, hosted by the
                                                                    property owner, shall be conducted with the CEO,
                                                                    a member of the ZBA and invited representatives
                                                                    from emergency support and service organizations
                                                                    such as fire, rescue, highway, to identify
                                                                    potential problem areas.
                                                                    Mitigation of potential concerns shall be
                                                                    addressed by the applicant and will become
                                                                    requirements of the SUP.
                                                                </li>
                                                                <li>Facility Plans to be Submitted
                                                                    <ol className="roman-list">
                                                                        <li>Aerial view of entire event site (from
                                                                            the Ulster County Parcel Viewer)
                                                                            including event buildings and tents,
                                                                            parking lots, access driveways, property
                                                                            lines and adjacent homes.
                                                                        </li>
                                                                        <li>Diagram of main building/tent site with
                                                                            event features located and accurately
                                                                            dimensioned. This includes guest
                                                                            drop-off area, handicap parking, caterer
                                                                            parking and prep tent, guest tent
                                                                            canopies for gathering prior to formal
                                                                            start of activities and portable
                                                                            toilets.
                                                                        </li>
                                                                        <li>Diagram of building or tent floor plan
                                                                            with accurate dimensions of band area,
                                                                            dance floor, caterer service area and
                                                                            guest table area. Note rest room layout
                                                                            and number if provided.
                                                                        </li>
                                                                        <li>Diagram of parking lot showing parking
                                                                            spaces, access aisles and lighting and
                                                                            the number of 9 ft X 20 ft spaces in
                                                                            each area. Indicate surface material
                                                                            proposed. Shale, gravel or stabilized
                                                                            grass surfaces preferred.
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                                <li>Event Management Plan: in addition to the above,
                                                                    the applicant shall submit a management plan
                                                                    which includes the following:
                                                                    <ol className="roman-list">
                                                                        <li>Hours of operation and maximum
                                                                            attendance
                                                                        </li>
                                                                        <li>Proposed parking location, layout,
                                                                            surface material and lighting
                                                                        </li>
                                                                        <li>Provisions for security, sanitation,
                                                                            refuse disposal, emergency care and
                                                                            lighting
                                                                        </li>
                                                                        <li>Compliance with Ulster County Board of
                                                                            Health and other applicable health and
                                                                            safety regulations by submitting the
                                                                            Health Certificate for the Caterer and
                                                                            if liquor is being served, the liquor
                                                                            license for the operator.
                                                                        </li>
                                                                        <li>Off-site and on-site access management
                                                                            measures and procedures including
                                                                            directional signage.
                                                                        </li>
                                                                        <li>The location and proposed use of
                                                                            off-site properties for parking or other
                                                                            support facilities which shall be
                                                                            subject to the same standards and
                                                                            regulations as the primary site.
                                                                        </li>
                                                                        <li>Noise control measures in accordance
                                                                            with a protocol established by the ZBA
                                                                            or an alternative approved by the ZBA.
                                                                        </li>
                                                                        <li>Completion of a site information and
                                                                            operations form as required by the ZBA.
                                                                            Such form shall include such data as
                                                                            contact persons, hours of operation food
                                                                            and drink plans, transportation plans,
                                                                            etc.
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                                <li>Documentation Required
                                                                    <ol className="roman-list">
                                                                        <li>Certificate of Insurance in the minimum
                                                                            amount of $1 million.
                                                                        </li>
                                                                        <li>Compliance with Ulster County Board of
                                                                            Health and other applicable health and
                                                                            safety regulations by submitting the
                                                                            Health Certificate for Caterer and, if
                                                                            liquor is being served, the liquor
                                                                            license for the operator.
                                                                        </li>
                                                                        <li>Off-site parking agreement, if any.</li>
                                                                        <li>Payment of an annual fee to be
                                                                            established by the Town Board to cover
                                                                            the cast of inspection and review of the
                                                                            special event venue.
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li>Review and Required Approvals
                                                            <ol className="level-bracketed-3">
                                                                <li>Issuance of a special use permit shall be
                                                                    subject to the standards and procedures above as
                                                                    well as those set forth in 5200-75 herein.
                                                                </li>
                                                                <li>Review by the local fire department and rescue
                                                                    squad shall be completed.
                                                                </li>
                                                                <li>Approval of the agency responsible for the
                                                                    access road, either the NYS DOT, the Ulster
                                                                    County DPW or the Town of Marbletown Highway
                                                                    Department.
                                                                </li>
                                                                <li>The Ulster County Health Dept.</li>
                                                            </ol>
                                                        </li>
                                                        <li>Annual SUP Permit Renewal
                                                            <ol>
                                                                <li>
                                                                    The special use permit may be renewed by the ZBA
                                                                    upon receipt of a report from the
                                                                    CEO stating that activities at the special event
                                                                    venue site have been conducted in
                                                                    compliance with the conditions attached to the
                                                                    permit and all other relevant provisions of the
                                                                    Zoning Law.
                                                                    Said permit renewal may be denied due to the
                                                                    applicant's non compliance with the conditions
                                                                    of the approved Special Use Permit or the
                                                                    provisions of the Zoning Law in the previous
                                                                    year.
                                                                    Operation of the special event venue site may be
                                                                    suspended if unresolved issues have not been
                                                                    corrected by owner.
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li>Exemptions.
                                                            <ol>The provisions of this section shall not apply to
                                                                the following:
                                                                <li>Events such as weddings, graduation parties and
                                                                    similar functions hosted by residents of the
                                                                    site, conducted no more than twice in any
                                                                    calendar year and for which no financial
                                                                    compensation is received.</li>
                                                                <li>Agriculture events directly supporting a farm
                                                                    operation do not require a SUP. Wedding
                                                                    receptions, bounce structures or generic fund
                                                                    raisers are not included in such exemption.
                                                                </li>
                                                                <li>Events conducted as customary ancillary
                                                                    functions at resorts, hotels, social clubs and
                                                                    similar venues which have received approval
                                                                    under this zoning law.
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>

                                                </div>
                                            </li>
                                        </ol>

                                    </div>
                                </section>

                                <section id="section-4">
                                    <h1>SECTION IV: SEVERABILITY</h1>
                                    <p>If any clause, sentence, paragraph, section, article or part of this Local
                                        Law shall be adjudicated in any court of competent jurisdiction to be
                                        invalid, such judgment shall not affect, impair or invalidate the remainder
                                        thereof, but shall be confined in its operation to the clause, sentence,
                                        paragraph, section, article or part thereof directly involved in the
                                        controversy in which such judgment shall have been rendered, and such
                                        invalidity shall not be deemed to affect the remaining portions thereof.</p>
                                </section>

                                <section id="section-5">
                                    <h1>SECTION V: EFFECTIVE DATE</h1>
                                    <p>This law shall become effective upon filing with the New York State Secretary
                                        of State.</p>
                                </section>
                            </article>
                        </Col>
                    </Row>
                </Grid>
            </StyledEventLaw>
        )
    }
}

export default AprilDraftLaw;