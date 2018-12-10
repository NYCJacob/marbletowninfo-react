import React from "react";
import {Component} from "react";
import styled from "styled-components";
import { Grid, Col, Row, Typography, Button,
    Toggler,
    Modal,
    ModalDialog,
    ModalContent,
    ModalHeader, ModalBody, ModalFooter
} from '@smooth-ui/core-sc';
import { sevcomments} from "./SevCommentData";

const StyledSevReport = styled.section`
  article * {
    line-height: 1.6;
  }
  .bold {
    font-weight: bold;
    }
    
  ol.level-abc {
    list-style-type: lower-alpha;
  }
`;

class SevReport extends Component {
    render() {
        return (
            <StyledSevReport>
            <Grid>
                <Row>
                    <Col>
                        <article>
                            <p><span className="bold">Introduction: </span>
                                in May 2018 the Marbletown, NY Town Board appointed a subcommittee of the
                                Planning and Zoning Committee (PZC) to review a draft amendment to the Marbletown Zoning
                                Law, generated to regulate Special Event Venues within select town zoning districts. The
                                subcommittee members, chair and deputy chair were local citizens selected by the Supervisor and
                                approved by the Town Board. The subcommittee was referred to as the Special Events Venue (SEV)
                                Subcommittee, and it met several times during the summer. The following provides a summary of
                                the events and background which led to the decision to charter this group, as well as the results of
                                their deliberations.
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
                                                                    Town Board Approval
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.A}
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
                            <p><span className="bold">Regional Growth of Special Event Venues:</span>
                                Over the past several years there has been an increasing
                                demand for special event permits to allow local citizens to hold recurring for-profit events on their
                                land in Ulster County. Many local communities have created regulations to control this use, as
                                existing legislation fails to provide clear guidance on how community quality of life will be
                                protected if they are allowed.
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
                                                                    Many Other Towns?
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.B}
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
                            <p><span className="bold">Special Event Venues in Marbletown:</span></p>
                            <p><span className="bold">History of use.</span>
                                SEVs have been allowed in the Marbletown with the issuance of a Special
                                Use Permit (SUP) by the Zoning Board of Appeals (ZBA) since 1969, and the ZBA has within
                                the past several years approved SEV permits for 2234 Lucas Ave, 3805 Main St, and 2585
                                State Route 209; however, the community has never had legislation specific to the
                                regulation of SEVs. Consequently, when a local landowner attempted to obtain permission
                                for a for-profit wedding venue on his property on Mill Dam Road, a neighbor filed an Appeal
                                of the Code Enforcement Officer’s classification of the use as a Limited Service Eating
                                Establishment. The Zoning Board of Appeals upheld the Appeal thereby creating a situation
                                where there was no legal use in the Schedule of Use Regulations that allowed an
                                application to be processed.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Pre-Appeal Permits
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.C}
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
                                As a result, legal counsel for Marbletown recommended the
                                development of legislation to define the use and requirements for SEV. This
                                recommendation as well as the decision by several landowners to hold SEVs on their land
                                without attempting to obtain permits (due to their concern over the difficulty of obtaining
                                such), and the increasing public comment about the challenges of SEV in residential
                                districts, led to an increased demand to understand community concerns and carefully
                                regulate the use under a new section of Chapter 200-8, Schedule of Uses of the zoning code
                                entitled: Arts, Entertainment and Recreation.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Events being held without permits
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.D}
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
                            <p><span className="bold">Public Concerns About SEVs.</span>
                                Marbletown citizens have expressed trepidation about
                                establishing SEV regulations in the community through letters to the editors, full-page ads
                                in the local papers and letters to the community Supervisor, Zoning Board of Appeals (ZBA)
                                Planning and Town Boards. The anxiety of the proposed legislation is focused on the
                                potential impact SEVs would have on the quality of life and economic strength of the
                                Marbletown. Specifically, opponents of the regulation believe that allowing SEVs in the
                                community will burden adjacent landowners with unwanted lights, noise and traffic; make
                                local roads dangerous, and impact sleep patterns, view sheds and the general quality of life
                                for our citizens. These negative attributes would, in turn, reduce the community’s
                                attractiveness to buyers in the second home market – especially those seeking residences in
                                rural localities to escape the noise and hubbub of their urban environment. Those potential
                                buyers would go elsewhere, thus reducing the value of Marbletown residential properties
                                and associated tax base. These concerns were specifically true for districts identified in the
                                zoning code as “residential.”
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Public Concerns Voiced to Subcommittee
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.E}
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
                            <p>
                                The public’s trepidation was reflected in the Subcommittee on SEV even for large tracks of
                                land residential or other. This comment from a sub-committee member summarizes the
                                issue: “...the desire to save rural spaces by allowing property owners to obtain income from
                                vacant land other than farming was good in concept, but the act itself of opening these
                                large parcels to events during the spring and summer months cannot help but change the
                                "rural" of the 25+ acre parcels and surrounding the parcels and lives around where these
                                events are permitted to take place. [allowing SEVs] ...could not only be viewed as
                                antagonistic to that basic "rural preservation" premise, but as a supplement to large
                                landowners at the expense of adjacent properties and town residents we are chartered to
                                protect. There will be noise spillovers. In most conversations I have heard in committee
                                meetings, we acknowledge that and in fact, and plan on it. Traffic will increase dramatically
                                10 or 12 weekends a year. Town enforcement of rules will have to take place at a cost to
                                someone. Lives and attitudes, and certainly that our much treasured "rural" character will
                                be somewhat lost by our turning these parcels into what is in effect, commercial
                                properties. We must weigh this balance, and it's cost and lasting effects on our town in all
                                respects, very carefully....” (Comments from Gary Johnson).
                            </p>
                            <p><span className="bold">Special Event Venue Legislation Planning:</span>
                                In 2017 the Marbletown Planning and Zoning Committee hired Dan Shuster, an experience professional planner
                                to generate a draft of legislation to regulate special event venues. Mr. Shuster proposes to define
                                Special Event Venues as: “The limited use of a parcel or part of a parcel of land, for celebratory,
                                cultural or educational activities such as concerts, conferences, banquets, festivals, weddings,
                                or other similar activities, subject to the standards and criteria set forth in §200-46 D. (18).
                                Permitted activities at such venues shall not include retail sale of new or used merchandise).”
                                <br/>
                                Mr. Shuster provided the following as rationale to consider for including SEV use in the local zoning
                                code:
                            </p>
                            <p>
                                Preservation of farmland and open space are important goals of the Town of Marbletown as
                                expressed in the Town’s Comprehensive Plan and Agricultural and Farmland Protection Plan. A
                                related goal is promotion of a tourism economy based on the Town’s natural, historical, cultural and
                                agricultural resources. It has been determined that, if designed, located and operated under appropriate
                                conditions, special events venues can be an effective tool to protect and preserve such resources.
                                <br/>
                                The Town of Marbletown should enact legislation which permits special events for celebratory,
                                cultural or educational activities such as concerts, conferences, banquets, festivals, weddings and
                                similar activities. Such activities shall only take place on sites in areas which contain the resources to
                                be protected in a manner which preserves the quality of nearby residential areas as well as the
                                natural environment. Such areas shall be limited to designated agricultural districts and business
                                zoning districts.
                                <br/>
                                The zoning regulations to implement the above policy should include specific standards to control
                                effects of the special venue events that can affect the residential character and natural environment
                                of surrounding area. These potential effects include traffic, noise, frequency and duration of events,
                                lighting and number of attendees.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Preservation of Open Space and Farmland
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.F}
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
                            <p><span className="bold">Establishing an Advisory Board on SEVs</span>
                                The town of Marbletown decided in the spring of 2018 to
                                establish an advisory board to review the challenges associated with SEVs and obtain input from
                                the community. On May 30, 2018 the Marbletown Town Board established a Special Events Venue
                                Legislation Subcommittee of the Marbletown Planning and Zoning Committee for the following
                                purpose: “Review the April 24, 2018 draft of Local Law Amending Chapter 200 of the Town Code,
                                Zoning drafted by Shuster Associates, and in doing so gather and document the following
                                information:
                            </p>
                            <ul>
                                <li>Regulatory and governmental guidance for proposed legislation</li>
                                <li>Marbletown Strategic Planning guidance related to draft local law</li>
                                <li>Lessons learned from experience of other NYS communities that have enacted similar
                                    legislation</li>
                                <li>Local concerns voiced by the community regarding the proposed legislation</li>
                            </ul>
                            <p>
                                [from this research] the SEV Subcommittee was required to generate a list of recommendations
                                regarding the draft legislation and submit the recommendations to the Planning and Zoning
                                Committee and Town Board for consideration.”
                            </p>
                            <p><span>Dates of Meetings. </span>
                                The Special Event Venue (SEV) Subcommittee had 6 meetings on the following
                                dates all held in the Rondout Municipal Center: May 31, June 7, June 21, July 19, August 2 and
                                August 16, 2018 and were appropriately noticed in accordance with the Committee on Open
                                Government’s guidelines.
                            </p>
                            <p><span className="bold">Public Participation. </span>
                                While the SEV Subcommittee was not required to have public participation
                                (because it was a subcommittee and not a full committee) on its deliberations, the public was
                                invited. The public was given advanced notice of the meetings through local media and each
                                meeting was well-attended by the community. However, most community members attending
                                were there to demonstrate against the consideration of SEVs anywhere in the community and
                                especially in “residential areas” and not to participate in the development of the details of the
                                legislation that could mitigate the negative aspects of SEVs (e.g., noise, traffic, safety, etc.).
                                <br/>
                                Accordingly, Subcommittee progress was severely hindered until it was decided to create “working
                                groups” comprised of board members and have them work in other areas of the building with press
                                participation but without public participation.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Public Participation
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.G}
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
                            <p><span className="bold">Committee Members. </span>
                                There were 13 members on the SEV Sub Committee. These individuals
                                represented a broad sampling of community opinions on the need for Special Event legislation in
                                Marbletown. Members are as shown:
                            </p>
                            <ul>
                                <li>Dan Proctor (Planning Board and PZC Sub Committee Chair)</li>
                                <li>Will Husta (PZC & ZBA Chair)</li>
                                <li>Stacy Sindt (PZC member)</li>
                                <li>Harry Hansen (PZC Member and Historical Committee Chair)</li>
                                <li>Daisy Foote</li>
                                <li>Dan Giessinger</li>
                                <li>John Cirone</li>
                                <li>Nancy Gagliardi</li>
                                <li>Gary Johnson</li>
                                <li>David Hodes</li>
                                <li>Sally Dolan</li>
                                <li>Michael Wilcox (resigned during 3 rd meeting and was replaced by Dr. Steve Smith)</li>
                                <li>Tracey Dewart</li>
                                <li>Steve Smith</li>
                            </ul>
                            <p><span className="bold">Subcommittee challenges:</span></p>
                            <p>
                                The central challenge to the activities of the Subcommittee was the public perception that the
                                group’s charter included the requirement to determine if the community should consider creating a
                                use in the zoning code for SEVs. While the charter allowed time to examine the guidance available
                                that supported the SEV use, the goal of the group was not to determine if the local zoning code
                                should include a SEV use, but to review and improve existing SEV draft legislation. This created
                                charter creep which was understandable given the opinion of the public present during the
                                meetings. Public opinion was clear: Marbletown should not have a SEV use within the zoning code
                                regardless of the location and circumstances of the request. In addition, the public present at the
                                meetings strongly believed that Marbletown should first consider the economic benefits of
                                allowing SEV’s into the community before the details of the regulations could be developed.
                                Discussion on this topic became so significant that the Chairman and Vice Chairman requested the
                                Town Board to reiterate the Subcommittee’s obligations during the fourth meeting of the group.
                                The Town Board provided the following comments to help the Subcommittee proceed:
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Evidence Considered and Ignored
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.H}
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
                            <ol>
                                <li>“The [Sub]- committee should concentrate on reviewing and improving the draft
                                    legislation on Marbletown Special Events with the goal of ensuring that all concerns
                                    identified by the public are mitigated...”</li>
                                <li>“The [Sub]-committee should not invest time in determining the economic impact to
                                    Marbletown of allowing Special Event Venues in our community, nor should it attempt to
                                    conduct a survey of opinions of resident on the subject...”</li>
                            </ol>
                            <p>
                                Once the Town Board provided the reiterated guidance, members Tracy Dewart, Nancy Gagliardi,
                                and Daisy Foote terminated their participation and the public attending the meeting expressed
                                their significant displeasure over the guidance of the Town Board.
                            </p>
                            <ol><span className="bold">Methodology Used to Accomplish Charter</span>
                                <li>
                                    <ol className="level-abc">The committee reviewed relevant NYS references and several local and regional documents to
                                        understand if there was any guidance that supported the use of property in Marbletown for
                                        special events. These documents included:
                                        <li>Marbletown Zoning Code</li>
                                        <li>Marbletown: Future of Our Community Survey Reports</li>
                                        <li>Marbletown Town Plan 2004</li>
                                        <li>Town of Marbletown Hamlet Strategic Plan</li>
                                        <li>1997 [Marbletown] Town Wide Survey and review of the Zoning Law</li>
                                        <li>2010 Farmland Protection Plan re. use of property for (SEV)</li>
                                        <li>Audit of the Marbletown Zoning Law prepared by Katherine Daniels of the NY
                                            Planning Federation (which is contained as an appendix of the Federation Plan).</li>
                                    </ol>
                                </li>
                                <li>Review NYS Department of Tourism data to determine value of tourism for Ulster county</li>
                                <li>Determine if there are there are lessons learned from communities that have passed similar
                                    legislation. Communities reviewed: Hyde Park, Rochester, Union Vale, South Paul.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Other Towns
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.B}
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
                                <li>Determine challenges to the community as a result of allowing SEVs</li>
                                <li>Determine if mitigation strategies exist for the challenges generated by SEV. As part of this
                                    requirement several other Towns SEV ordinances were reviewed, and the Chair and another
                                    member of the Subcommittee visited Rhinebeck and discussed the challenges and successes of
                                    SEV related legislation for that town.</li>
                                <li>Recommend mitigation strategies to improve draft SEV legislation</li>
                                <li>Write and forward a final report with recommendations to the Town Board and PZC.</li>
                            </ol>

                            <p className="bold">Governmental Planning Guidance:</p>
                            <p>
                                A review of the Marbletown Zoning Law in regard to SEV uses led to the following guidance: Our
                                Zoning Law was created to “ protect and promote public health, safety, morals, comfort,
                                convenience, economy, town aesthetics, and the general welfare, and for the following additional
                                purposes: (Note, the following was selected from the code based on value as guidance for SEV
                                discussion):
                            </p>
                            <ul>
                                <li>To encourage the most appropriate use of land in the community to conserve and enhance
                                    the value of property;</li>
                                <li>To protect and enhance existing wooded areas, scenic areas, and waterways and to
                                    preserve, where appropriate, the essentially rural character of the Town;</li>
                                <li>To assure privacy for residences and freedom from nuisances and things harmful to the
                                    senses, including air pollution;</li>
                                <li>To protect the community against unsightly, obtrusive, and noisome land uses and
                                    operations.</li>
                            </ul>
                            <ul><span>
                    A detailed review of Marbletown planning documents suggested that embracing some form of SEV
                    legislation could contribute to the following community planning goals:
                    </span>
                                <li>Conserve open space</li>
                                <li>Preserve our farmland</li>
                                <li>Encourage small business, services and four- season tourism</li>
                                <li>Preserve rural character</li>
                                <li>Prevent commercial sprawl and promote hamlet-centered [commerce]</li>
                                <li>Increase enthusiasm for local food</li>
                                <li>Attract home-based occupations and businesses</li>
                            </ul>
                            <p>
                                Reviewing NYS Agricultural Land Use Directives the committee learned that the state supports
                                select SEVs to conserve farm lands with appropriate local controls.
                                <br/>
                                Discussions with the NYS Department of Tourism and the Ulster County Tourism Department
                                indicated that the state encourages activities to promote tourism – especially agritourism, which
                                SEVs are defined as. Ulster County Department of Tourism attributes Tourism in the Catskills as a
                                $1.2 billion industry, supporting 17,822 jobs. Ulster County represents 45% of the region’s tourism
                                sales with $554 million in traveler spending. In short, well-controlled and regulated SEVs would
                                encourage tourism and provide positive economic return.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Agritourism
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.I}
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
                            <p className="bold">Findings:</p>
                            <p>
                                While most of the committee believed that allowing well-regulated Special Events to be held in
                                Marbletown would help the community meet some comprehensive planning and economic goals, a
                                sizable minority of the committee (and a very vocal majority of the public at the meetings) did not.
                                They felt that allowing the use would burden community infrastructure, create traffic congestion,
                                noise, light pollution, reduce property values and degrade local view sheds – thus reducing the
                                community’s ability to draw new residents (tax dollars) to Marbletown. This perspective remained
                                even after the committee reviewed the ramifications of not allowing SEV on undeveloped land, but
                                instead allowing developers to create subdivisions on the property zoned for such.
                            </p>
                            <p>
                                The predominate opinion of the SEV Subcommittee by the conclusion of the meetings was that
                                Special Events could be valuable to Marbletown but only if they are well regulated and allowed
                                only in agricultural or business districts. The committee felt that the community needed in addition
                                to regulations a means to ensure enforcement of the SEV legislation – before, during, and after the
                                events – and a means to promulgate detailed up-to-date information about the events to the public
                                well in advance of the date of the events and through the event duration.
                                <Toggler>
                                    {({ toggled, onToggle }) => (
                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Agriculture/Residential Districts
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.J}
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
                            <ul>
                                <span className="bold">Lessons learned from regional communities that have SEV regulations:</span>
                                <li>Require permits with an application fee that cover the administrative and enforcement
                                    costs of the event</li>
                                <li>Ensure adequate parking (require parking plan), ingress, egress, traffic control and sanitary
                                    facilities</li>
                                <li>Ensure local sound ordinances are maintained and enforced</li>
                                <li>Enforcement is critical – event must have a single point of contact with authority and tools
                                    needed to maintain control</li>
                                <li>Maintain a detailed site plan</li>
                                <li>Advertise event one month in advance</li>
                                <li>Close event at 10 PM with one hour clean up</li>
                            </ul>
                            <p>
                                Challenges to Community from SEV (Ranked by Level of Concern—Most Concern First) and
                                Strategies to Reduce or Mitigate Those Concerns:
                            </p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Concern</th>
                                    <th>Mitigations</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <span className="bold">Noise</span>
                                        <br/>
                                        SEVs will create noise that will interfere with the quality of
                                        life in the surrounding neighborhood and will reduce
                                        property values.
                                        <Toggler>
                                            {({ toggled, onToggle }) => (
                                                <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    At What Cost
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.K}
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
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Set noise standards and method of enforcement.</li>
                                            <li>Ensure sound is measured from several predetermined locations and monitored during the event.</li>
                                            <li>Use professional sound surveyor</li>
                                            <li>Have applicant pay for cost of survey and enforcement</li>
                                            <li>Involve adjacent property owners</li>
                                            <li>Generate noise ordinance for community</li>
                                            <li>Check and enforce standards</li>
                                            <li>Include neighbors in required sound test during SUP</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="bold">Location of SEVs.</span><br/>
                                        SEV’s create safety concerns for the community, create
                                        unwanted noise and light pollution, are a burden on MT infrastructure
                                        <Toggler>
                                            {({ toggled, onToggle }) => (
                                                <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Zone Confusion?
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.L}
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
                                    </td>
                                    <td>
                                        <ul>
                                            <li>SEVs should not be allowed in residential districts</li>
                                            <li>Parcel size should be 25 acres; however, the event
                                                location should be reviewed using a formula which
                                                considers the parcel size and configuration, location of
                                                neighbors, vegetation, applicant’s plan for traffic and
                                                pedestrian safety, sound and light control, quality of
                                                roads for event access, and fire/safety codes</li>
                                            <li>Event must not restrict business</li>
                                            <li>SEVs should be allowed in business districts; however,
                                                use regulations should be tailored to the district and
                                                SEV location. SEVs should be enclosed in permanent
                                                buildings in business districts</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="bold">Operations.</span><br/>
                                        SEV operations reduce neighborhood quality of life,
                                        create traffic and other hazards and can’t be controlled
                                        <Toggler>
                                            {({ toggled, onToggle }) => (
                                                <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    No Limits!?!?
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.M}
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
                                    </td>
                                    <td>
                                        <ul>
                                            <li>SEV must have a plan that meets MT requirements</li>
                                            <li>All events must have the owner on site or an event
                                                manager that has authority to act to counter concerns identified</li>
                                            <li>Accurately dimensioned site plan with all physical
                                                elements of the event identified
                                            </li>
                                            <li>No hotels, camping, RV’s allowed without SUP</li>
                                            <li>No pre or post event dinners</li>
                                            <li>Limit operations from 10 AM to 10 PM with 1 hour for clean up
                                            </li>
                                            <li>Max attendance determined by parcel size and
                                                configuration; roads and ingress and egress concerns
                                            </li>
                                            <li>Event frequency regulated. Limit to 12/year, 2 per
                                                month with a minimum of 5 days in between events
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="bold">Enforcement.</span><br/>
                                        SEVs once permitted will ignore requirements. There is no mechanism of enforcement
                                        <Toggler>
                                            {({ toggled, onToggle }) => (
                                                <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Constable
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.N}
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
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Create an enforceable contract with applicant</li>
                                            <li>Set up fines associated with infractions</li>
                                            <li>3 infractions in one event SUP not renewed</li>
                                            <li>Applicant/owner should be at event</li>
                                            <li>Create “event description form” and review 10 days
                                                before with applicant.</li>
                                            <li>Hire constable or event enforcement person. Use SUP
                                                fee to pay for constable. He or she should be on call
                                                24/7 and the primary governmental POC for all complaints.
                                                His or her # should be available on the web and posted on a
                                                sign at the event. The constable must be trained and deputized
                                            </li>
                                            <li>Require single point of contact from applicant for the event.
                                            </li>
                                            <li>Have failures to correct problems recorded and
                                                influence future applications by applicant
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="bold">Public Information</span>
                                        <br/>
                                        There is no mechanism to alert the public of future
                                        events or the details on approved events.
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                Set up SEV website and populate with event details
                                                and town requirements. Send letter to all neighbors.
                                                <Toggler>
                                                    {({ toggled, onToggle }) => (
                                                        <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Another Website
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.O}
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
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <article>
                                <p className="bold">Committee Member’s Recommendations and Areas for Future Study:</p>
                                <ul>
                                    <li>Generate legislative language that supports the mitigations detailed above</li>
                                    <li>Limit the SEV legislation to only business and agricultural districts</li>
                                    <li>Obtain lessons learned by enacting legislation for business and agricultural districts and
                                        reassess the application of the legislation to other zoning districts in Marbletown</li>
                                    <li>Create a sound ordinance for Marbletown</li>
                                    <li>Create a means to inform the public on SEV actions</li>
                                    <li>Generate a means of enforcement for SEV that is viable and sufficiently punitive to prevent
                                        applicants from ignoring the legislation. Understand the full ramifications that come along
                                        with having a "constable" - who engages him/her, how his/her decisions impact the town's
                                        liability, how does he/she interact with the Police - all that needs to be fleshed or spelled
                                        out with input from the attorney and maybe a venue/event operator.
                                    </li>
                                    <li>identifying fees and penalties. For example, the town should charge fees for providing
                                        services directly related to the event or event venue. We should list a budget or capital
                                        items, like the sound meter, and make sure the general permit fees cover those items.
                                    </li>
                                    <li>Regarding the number of events that an operator can hold over the period of a year - how
                                        will the town handle those prime weekends in May and June when there might be many
                                        more than one event being held in town. If you total the number of potential venues
                                        (under/over the 25 acres threshold), that's your minimum number of events that could be
                                        scheduled on those prime weekends. Even if each of those events pays its fees, how many
                                        "competent" constables and traffic directors will be on duty and where will they come
                                        from? I don't know if there are now only 1 or 2 possible locations (which might be
                                        manageable) that will be impacted but we must consider the possibility we may have 5+
                                        events on the same night in the future.</li>
                                    <li>Determine what the overall financial benefit SEVs provide the town</li>
                                    <li>Determine what constitutes a private and commercial event</li>
                                    <li>Determine real facts about the impact SEVs have on property values</li>
                                    <li>Bring existing illegal SEVs into compliance or shut them down</li>
                                    <li>Determine if there is a way to use SEVs to help preserve historic buildings</li>
                                    <li>Make the rules specific and understood</li>
                                    <li>Set up monitoring committee to track SEVs in town (monitoring and correcting problems for
                                        and against in current rules)</li>
                                    <li>Establish rules specific to the districts</li>
                                    <li>Establish different number of events allowed based on event type (yoga retreat vs rock
                                        concert)
                                    </li>
                                    <li>Determine security requirements for SEVs. On site enforcement based on number of
                                        participants at event (over 100 must have private security)</li>
                                    <li>Discussions to date have focused too much focus on weddings; what about tractor pulls and
                                        church suppers?</li>
                                    <li>Determine what events are exempt from EVS rules? (Church Suppers)</li>
                                    <li>Determine Insurance amounts and what types (compensation and liability on file with town)
                                    </li>
                                    <Toggler>
                                        {({ toggled, onToggle }) => (
                                            <span>
                                                <i className=" far fa-comment" style={{color: "red", fontSize: "1.3em", paddingLeft: "0.2em", paddingRight: "0.3em"}}
                                                   onClick={() => onToggle(true)}></i>
                                                <Modal opened={toggled} onClose={() => onToggle(false)}>
                                                    <ModalDialog>
                                                        <ModalContent>
                                                            <ModalHeader>
                                                                <Typography variant="h5" m={0}>
                                                                    Ready or Not?
                                                                </Typography>
                                                            </ModalHeader>
                                                            <ModalBody lineHeight={2}>
                                                                {sevcomments.P}
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
                                </ul>
                                <p className="bold">Recommended Next Steps:</p>
                                <p>
                                    The findings of the Subcommittee are provided to the Planning and Zoning Committee to facilite
                                    their deliberations on the SEV regulations. We recommend that the PZC consider these findings
                                    and use them to assist in the development of future regulations on Marbletown Special Event
                                    Venues.
                                </p>
                            </article>

                        </article>

                    </Col>
                </Row>
            </Grid>
            </StyledSevReport>
        )
    }
}

export default SevReport;