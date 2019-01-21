import React from "react";
import {Component} from "react";
import styled from "styled-components";
import { Col, Row, Typography, Button,
    Toggler,
    Modal,
    ModalDialog,
    ModalContent,
    ModalHeader, ModalBody, ModalFooter} from '@smooth-ui/core-sc';

const  StyledAccAptLaw = styled.section`
@media screen and (max-width: 450px) {
    font-size: smaller;
}


.underline {
  text-decoration: underline;
}

.strike {
  text-decoration: line-through;
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

ol.level-abc li {
  margin-bottom: 1.2em;
}

ol.level-123 {
  list-style-type: decimal;
}

ol.level-123 li {
  margin-bottom: 1.2em;
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

class AccApt201901 extends Component {
    render() {
        return (
            <StyledAccAptLaw>
                <Row>
                    <Col>
                        <article id="draft-law-content">
                            <section className="caption">
                                <Typography variant="h1">Local Law No.__ of 2019 </Typography>
                                <Typography variant="h2">
                                    Accessory Apartment Law Town of Marbletown
                                </Typography>
                            </section>
                            <section id="section-1">
                                <h1>SECTION I: SHORT TITLE AND PURPOSE</h1>
                                <p>
                                    This Local Law is to be known as the <strong>Local Law __ of 2019 Accessory Apartment Law.</strong>
                                    This Law amends the Zoning Law to revise and replace the existing provisions of the Town of Marbletown Code
                                </p>
                            </section>
                            <section id="section-2">
                                <h1>SECTION II: LEGISLATIVE FINDINGS</h1>
                                <p>
                                    The Town Board of the Town of Marbletown hereby adopts and makes the following findings:
                                </p>
                                <ol>
                                    <li>
                                        The Town Zoning Law is in need of revision to ensure compliance with the policies
                                        and objectives of the Town Comprehensive Plan
                                        <Toggler>
                                            {({ toggled, onToggle }) => (
                                                <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Town Comprehensive Plan Compliance
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    Exactly what part of the Town Comprehensive Plan this refers to is unclear.
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                            ) }
                                        </Toggler>
                                        and other related plans proposed and adopted in recent years.

                                    </li>
                                </ol>
                            </section>
                            <section id="section-3">
                                <h1><span className="underline">SECTION III: 2019 AMENDMENTS</span></h1>
                                <p>The Zoining Law of the Town of Marbletown shall be amended as follows:</p>
                                <div>
                                    <ol className="level-ABC">
                                        <li>
                                            <strong>Section A. Accessory Apartments</strong>
                                            <ol className="level-123">
                                                <Typography>
                                                    The following sections of the Town of Marbletown Zoning Code shall be modified as follows:
                                                </Typography>
                                                <li>
                                                    Section 200-13. ACCESSORY APARTMENT-- a dwelling unit, which contains cooking, sanitary
                                                    and sleeping facilities, and shall contain only one bedroom, contains a minimum of 350 sq. ft,
                                                    of habitable space as defined by the Property Maintenance Code 2015 Of New York State,
                                                    <Toggler>
                                                        {({ toggled, onToggle }) => (
                                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    2015 New York State Property Maintenance Code Definition
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    Habitable Space. Space in a structure for living, sleeping, eating or cooking.
                                                                    Bathrooms, toilet rooms, closets, halls, storage or utility spaces, and
                                                                    similar areas are not considered habitable spaces.
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                        ) }
                                                    </Toggler>
                                                    but not more than 35% of the gross floor area of the primary residence or 900 sq. ft.,
                                                    <Toggler>
                                                        {({ toggled, onToggle }) => (
                                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Maximum Area
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    Current Marbletown Code definition limits accessory apartments to within the primary residence
                                                                    and allows up to 700 sq. ft.  [Section 200-13 Terms Defined, Accessory Apartment, amended 2015]
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                        ) }
                                                    </Toggler>
                                                    whichever is less and is contained within the primary residential structure or
                                                    an approved detached stucture.
                                                    <Toggler>
                                                    {({ toggled, onToggle }) => (
                                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Detached Structure
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    This is a dramatic change in zoning because it permits a second dwelling on one lot without
                                                                    the minimum lot requirements (see below).  What is an "approved detached structure"?
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                    ) }
                                                </Toggler>
                                                </li>
                                                <li>
                                                    Section 200-46.D.(15), Apartments accessory to the principal permitted residential use of the same
                                                    parcel are permitted in all districts, except that they shall not be allowed in the I-I District
                                                    and a Special Use Permit shall be required in the S-R E and S-R N districts in the event of
                                                    exterior modification to the structure shall require a Certificate of Appropriateness permit..
                                                    It is the intent of this provision to expand affordable housing opportunities in the Town,
                                                    particularly for small families and senior citizens, to allow more efficient use of residential
                                                    and accessory structures, to provide expanded economic return to enable older homeowners to
                                                    maintain their home and to provide options for local workers, young and older families,
                                                    live-in help or health providers.
                                                    <Toggler>
                                                        {({ toggled, onToggle }) => (
                                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Expanded Affordable Housing
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    This is a worthy goal but some points to consider.
                                                                    Senior citizens should bot be forced to climb stairs to an apartment above a garage.
                                                                    Health aides who are not living within ear-shot are not much use in most cases.  Therefore,
                                                                    accessory apartments for such situations are normally within the primary residence.
                                                                    <p>
                                                                        A family is not going to live long term in such an apartment. However, these will be prime
                                                                        spaces for short term rentals.  Such rentals have tend to increase housing prices because they
                                                                        attract premium prices and remove space from the long term rental market.
                                                                    </p>
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                        ) }
                                                    </Toggler>
                                                    <ol className="level-abc">
                                                        <li className="level-abc-subtitle"><span className="underline">Lot Area</span>
                                                                <p>[1] An Accessory Apartment located in the principal residence (a common foundation
                                                                    or connected to the principal structure)
                                                                    <Toggler>
                                                                        {({ toggled, onToggle }) => (
                                                                            <span>
                                                                            <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                                               onClick={() => onToggle(true)}></i>
                                                                            <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                                                <ModalDialog>
                                                                                    <ModalContent>
                                                                                        <ModalHeader>
                                                                                            <Typography variant="h5" m={0}>
                                                                                                Connectd to the principal structure
                                                                                            </Typography>
                                                                                        </ModalHeader>
                                                                                        <ModalBody lineHeight={2}>
                                                                                            <Typography>
                                                                                                What qualifies as 'connected'- a breezeway?
                                                                                            </Typography>
                                                                                        </ModalBody>
                                                                                        <ModalFooter>
                                                                                            <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                                                Close
                                                                                            </Button>
                                                                                        </ModalFooter>
                                                                                    </ModalContent>
                                                                                </ModalDialog>
                                                                            </Modal>
                                                                        </span>
                                                                        ) }
                                                                    </Toggler>
                                                                    on the site and complying with the following
                                                                    standards shall be required to comply with the required minimum lot area of the zoning
                                                                    district in which it is located or be a pre-existing non-conforming lot but shall not
                                                                    require any additional lot area for the Accessory Apartment. Only one Accessory Apartment
                                                                    unit per property shall be eligible for such provision. Any additional dwelling units on
                                                                    the same property shall be subject to the provisions of 900-24.A.</p>
                                                                <p>
                                                                    [2] A lot on which an Accessory Apartment is located in an approved detached structure shall
                                                                    comply with the required minimum lot area of the zoning district in which it is located
                                                                    plus an additional one-half acre in the R-2 R3, SR, Districts or plus one additional acre
                                                                    in the R-1, A-2, A-3 or A-4 District.
                                                                </p>
                                                                <p>
                                                                    [3] Any detached structure where an Accessory Apartment is proposed must meet the required
                                                                    setbacks for the District in which it is located or be granted an area variance.
                                                                </p>
                                                        </li>
                                                        <li>
                                                            <span className="underline">Owner Occupancy.</span>  The owner of the property on which an Accessory Apartment is located shall maintain
                                                            their primary domicile in either the principal residence or the Accessory Apartment on the subject property.
                                                            <Toggler>
                                                                {({ toggled, onToggle }) => (
                                                                    <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Owner Occupancy
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                <Typography>
                                                                    This does not address the situation where there is corporate ownership or multiple owners.
                                                                    There is also the issue of proof and enforcement.
                                                                </Typography>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                    Close
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </ModalDialog>
                                                </Modal>
                                            </span>
                                                                ) }
                                                            </Toggler>
                                                        </li>
                                                        <li>
                                                            <span className="underline">Certificate of Occupancy.</span> An Accessory Apartment may not be located on a property where a current building
                                                            violation exists, unless the legalization or creation of the Accessory Apartment will cure the violation.
                                                            <p className="strike">
                                                                Current law Section 200-46(15)(c) Age of structure. An accessory apartment shall be located in the principal dwelling,
                                                                provided that such principal dwelling was originally constructed at least 10 years prior to the date of the application
                                                                for a special permit.
                                                                <Toggler>
                                                                    {({ toggled, onToggle }) => (
                                                                        <span>
                                                                    <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                                       onClick={() => onToggle(true)}></i>
                                                                    <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                                        <ModalDialog>
                                                                            <ModalContent>
                                                                                <ModalHeader>
                                                                                    <Typography variant="h5" m={0}>
                                                                                        Prior construction requirement
                                                                                    </Typography>
                                                                                </ModalHeader>
                                                                                <ModalBody lineHeight={2}>
                                                                                    <Typography>
                                                                                        Currently, the law only permits accessory apartments if the primary residence has existed for
                                                                                        a minumum of 10 years.  The current law removes this requirement entirely.
                                                                                    </Typography>
                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                                        Close
                                                                                    </Button>
                                                                                </ModalFooter>
                                                                            </ModalContent>
                                                                        </ModalDialog>
                                                                    </Modal>
                                                                </span>
                                                                    ) }
                                                                </Toggler>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <span className="underline">Maximum floor area.</span> Accessory Apartment shall contain a minimum of 350 sq. ft, of habitable space as defined
                                                            by the Property Maintenance Code 2015 Of New York State, but not more than 35% of the gross floor area of the
                                                            primary residence or 900 sq. ft., whichever is less.
                                                            <Toggler>
                                                                {({ toggled, onToggle }) => (
                                                                    <span>
                                                                    <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                                       onClick={() => onToggle(true)}></i>
                                                                    <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                                        <ModalDialog>
                                                                            <ModalContent>
                                                                                <ModalHeader>
                                                                                    <Typography variant="h5" m={0}>
                                                                                        Apartment Area
                                                                                    </Typography>
                                                                                </ModalHeader>
                                                                                <ModalBody lineHeight={2}>
                                                                                    <Typography>
                                                                                        This seems to duplicate Section A-1 above regarding apartment size.
                                                                                    </Typography>
                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                                        Close
                                                                                    </Button>
                                                                                </ModalFooter>
                                                                            </ModalContent>
                                                                        </ModalDialog>
                                                                    </Modal>
                                                                </span>
                                                                ) }
                                                            </Toggler>
                                                        </li>
                                                        <li>
                                                            <span className="underline">Number of Accessory Apartments.</span> There shall be no more than one Accessory Apartment per lot permitted under this subsection.
                                                        </li>
                                                        <li>
                                                            <span className="underline">Exterior Appearance.</span> Alterations to the principal residence to accommodate an Accessory Apartment shall be designed to
                                                            retain its exterior appearance as a single family dwelling, as viewed from the street. No more than 100 square feet
                                                            may be added to the exterior of the principal structure to accommodate an Accessory Apartment. In a detached structure,
                                                            the exterior of the structure shall retain a residential look from the street. Any structure that is locally landmarked
                                                            by the historic commission and town board, must get a certificate of appropriateness from the historic commission for any
                                                            exterior changes.
                                                        </li>
                                                        <li>
                                                            <span className="underline">Water and Sewer Service.</span> of the provision of an adequate water supply and sewage disposal shall be provided as meeting the
                                                            standards provided by the Ulster County Board of Health.
                                                        </li>
                                                        <li>
                                                            <span className="underline">Off-street Parking.</span> At least one additional off-street parking space shall be provided for the Accessory Apartment.
                                                            In no case shall there be less than three parking spaces on site.
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Section 200-8 Schedule of Use Regulations<br></br>
                                                    <Typography>
                                                        Accessory Apartments under Accessory Uses shall be modified to reflect their being Permitted
                                                        in all districts except I-I shall remain X and SR-E and SR -N shall be Permitted and
                                                        Special Use Permit (SU) where exterior modification is required.
                                                    </Typography>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>

                            </section>
                            <section id="section-4">
                                <h3><span className="underline">SECTION IV.  AMNESTY</span></h3>
                                <p>
                                    Landowners for a period of 160 days from the date of Effectiveness of this local Law for all prior non-conforming
                                    and un-permitted Accessory Apartments may make application to the Town of Marbletown Building Department, without penalty,
                                    for the legalization
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                                    <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.5em"}}
                                                                       onClick={() => onToggle(true)}></i>
                                                                    <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                                        <ModalDialog>
                                                                            <ModalContent>
                                                                                <ModalHeader>
                                                                                    <Typography variant="h5" m={0}>
                                                                                        Amnesty
                                                                                    </Typography>
                                                                                </ModalHeader>
                                                                                <ModalBody lineHeight={2}>
                                                                                    <Typography>
                                                                                        Hopefully this will require all inspections must be done as these are previously uninspected spaces.
                                                                                    </Typography>
                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <Button variant="secondary" onClick={() => onToggle(false)}>
                                                                                        Close
                                                                                    </Button>
                                                                                </ModalFooter>
                                                                            </ModalContent>
                                                                        </ModalDialog>
                                                                    </Modal>
                                                                </span>
                                        ) }
                                    </Toggler>
                                    of existing Accessory Apartments. All applications shall comply with the current law but
                                    applications will not be limited, restricted or included in the annual permit limitations.
                                </p>
                            </section>
                            <section id="section-5">
                                <h3><span className="underline">SECTION V. ANNUAL PERMIT LIMITATION</span></h3>
                                <p>
                                    Permits shall be issued on a first come first served basis but in no calendar year shall the
                                    Town of Marbletown issue more than Fifty (50) total permits for Accessory Apartments.
                                </p>
                            </section>
                            <section id="section-6">
                                <h3><span className="underline">SECTION VI. SEVERABILITY</span></h3>
                                <p>
                                    The invalidity of any provision of this Local Law shall not affect the validity of any portion
                                    of this Local Law which can be given effect without such invalid provision.
                                </p>
                            </section>
                            <section>
                                <h3><span className="underline">SECTION VII. EFFECTIVENESS</span></h3>
                                <p>
                                    This Local Law shall become effective upon filing with the Secretary of State.
                                </p>
                            </section>

                        </article>

                    </Col>
                </Row>
            </StyledAccAptLaw>
        )
    }
}

export default AccApt201901;