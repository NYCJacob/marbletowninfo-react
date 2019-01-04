import React from "react";
import styled from "styled-components";
import {Col, Row, Button, Typography,
    Toggler,
    Modal,
    ModalDialog,
    ModalContent,
    ModalCloseButton,
    ModalHeader, ModalBody, ModalFooter
} from '@smooth-ui/core-sc';


const StyledModalBody = styled(ModalBody)`
* { box-sizing: border-box; }

  .modal-parentlist li {
      list-style-type: upper-alpha;
    }
    .modal-sublist > li {
      list-style-type: decimal;
    }
`

const StyledDivButton = styled.div`
    display: inline-flex;
    cursor:pointer;
    &:active {
      color:red;
      box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
    }
    
`;

const StyledZoneButton = styled.span`
        @media (max-width: 575px) {
          font-size: x-small;
        }
        color: black;
        padding: .1em;
        flex: 1;
        i {
          padding-right: 1vw;
        }
`;

const StyledB2Button = styled(StyledZoneButton)`
            background: rgb(202, 228, 189);
`;

const StyledA2Button = styled(StyledZoneButton)`
            background: rgb(202, 228, 189);
`;

const StyledA3Button = styled(StyledZoneButton)`
            background: rgb(168, 219, 66);
`;

const StyledA4Button = styled(StyledZoneButton)`
            background: rgb(92, 138, 69);
`;

const StyledB1Button = styled(StyledZoneButton)`
            background: rgb(241, 182, 182);
`;

const StyledIBButton = styled(StyledZoneButton)`
            background: #e5ccf3;
`;

const StyledI1Button = styled(StyledZoneButton)`
            background: #f3a65a;
`;

const StyledR1Button = styled(StyledZoneButton)`
            background: #f3f35a;
`;

const StyledR3Button = styled(StyledZoneButton)`
            background: #f3f3cc;
`;


export const ZoneLegend = () => (
        <Row ml={0} p={0}>
            <Col xs={12} md={7} sm={6} p={0} m={0} style={{textAlign: "center"}} fontSize={ {xs: "0.75em"} }>
                <div>
                <Toggler>
                    {({ toggled, onToggle}) => (
                        <StyledDivButton className="modal-wrapper">
                            <StyledZoneButton onClick={() => onToggle(true)}>
                                <span style={{fontWeight: "bold", fontSize: "1.2em"}}>
                                    <i className="fal fa-question-circle" style={{paddingRight: "0"}}></i>
                                </span>
                                <Typography>Zone Colors:
                                </Typography>
                            </StyledZoneButton>
                            <Modal opened={toggled} onClose={() => onToggle(false)}>
                            <ModalDialog maxWidth="75vw">
                            <ModalContent>
                            <ModalCloseButton />
                            <ModalHeader>
                            <Typography variant="h5" m={0}>
                            Marbletown Zones (Town Code Section 200-4)
                            </Typography>
                            </ModalHeader>
                            <StyledModalBody>
                                    <ol className="modal-parentlist">
                                        <li>
                                            <Typography>
                                                <strong>Residence districts:</strong> The purpose of the residence districts is to provide a setting for residential uses and
                                                customary accessory uses, free from the adverse effects of incompatible nonresidential uses, at various densities
                                                based on the natural features and existing development patterns in each district.
                                            </Typography>
                                            <ol className="modal-sublist">
                                                <li>A-2 Residence District</li>
                                                <li>A-3 Residence District</li>
                                                <li>A-4 Residence District</li>
                                                <li>R-1 Residence District</li>
                                                <li>R-2 Residence District (not mapped)</li>
                                                <li>R-3 Residence District</li>
                                            </ol>
                                        </li>
                                        <li><strong>SR Special Residence:</strong> The purpose of the SR district is to preserve the historic residential character of portions of Stone Ridge
                                            while permitting certain limited nonresidential uses in existing buildings and on vacant land, subject to careful controls
                                            to preserve the scale and character of the area.
                                        </li>
                                        <li>
                                            <strong>B-1 General Business:</strong> The purpose of the B-1 District is to permit the use of existing structures for business uses appropriate to the predominantly small lots in the district;
                                            to preserve the existing scale and character of the business area; and to reduce or prevent traffic congestion and safety hazards.
                                            New structures intended for business use are subject to more stringent development standards necessary to maintain traffic safety and
                                            avoid conflicts between new and existing structures and uses.
                                        </li>
                                        <li>
                                            <strong>B-2 Highway Business:</strong> The purpose of the B-2 District is to provide opportunities for low-density business development,
                                            particularly uses with a highway orientation, subject to development standards intended to promote traffic safety on a heavily traveled highway.
                                        </li>
                                        <li>
                                            <strong>I-1 Light Industrial District:</strong> The purpose of the Light Industrial District is to provide opportunities for industrial use.
                                        </li>
                                        <li>
                                            <strong>I-B Light Industrial/Business:</strong> The purpose of the Light Industrial/Business District is to provide opportunities for a range of industrial and
                                            business uses.
                                        </li>
                                    </ol>
                            </StyledModalBody>
                            <ModalFooter>
                                <Button variant="secondary" onClick={() => onToggle(false)}>
                                Close
                                </Button>
                            </ModalFooter>
                            </ModalContent>
                            </ModalDialog>
                            </Modal>
                        </StyledDivButton>
                        )
                    }

                </Toggler>

                <StyledA2Button>A-2</StyledA2Button>
                <StyledA3Button>A-3</StyledA3Button>
                <StyledA4Button>A-4</StyledA4Button>
                <StyledB1Button>B-1</StyledB1Button>
                <StyledB2Button>B-2</StyledB2Button>
                <StyledIBButton>I-B</StyledIBButton>
                <StyledI1Button>I-1</StyledI1Button>
                <StyledR1Button>R-1</StyledR1Button>
                <StyledR3Button>R-3</StyledR3Button>
                </div>
            </Col>
            <Col xs={12} md={5} sm={6} style={{textAlign: "center", paddingRight: "3vw"}} fontSize={ {xs: "0.75em"} } >
                <StyledZoneButton >
                    <span style={{color: "red"}}>
                          <i className="fal fa-exclamation-circle"></i>
                    </span>
                    <Typography>Data may not be 100% accurate.
                    </Typography>
                </StyledZoneButton>
            </Col>
        </Row>
);

