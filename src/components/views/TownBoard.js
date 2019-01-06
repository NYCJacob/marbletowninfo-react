import React, { Component } from "react";

import styled from "styled-components";
import "../../styles/responsAccord.css";
import { tboard2018 } from "../../api/townboardapi";
import Accordion from "../reactrespaccordion/Accordion";

const StyledTownBoard = styled.section`
  
`;

const monthsArr =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const yearsAvailable = [{ "year": "2018", "townboardMembers": [ "Rich Parete (Supv)", "Tim Sweeney", "Joe Borzumato", "Eric Stewart", "Don LaFera" ] } ];

const yearsAccordionGenerator = (years) =>{
    return(
        years.map((yearData, index) => {
            let { year, townboardMembers } = yearData;
            return(
                <div key={`key${index}`} data-trigger={ `${year} Town Board: ${townboardMembers}` } optionalclassname="years">
                    <Accordion>
                        {accordGenerator(year)}
                    </Accordion>
                </div>
            )
            }
        )
    )
}

const monthAccordionGenerator = (month) => {
    return(
        month.map(( meeting, index ) => {
            let date = new Date(meeting.date).toUTCString();

            return (
                <div key={`key${index}`} data-trigger={date} optionalclassname="meetingPane">
                    <p>Present: {meeting.present}</p>
                    <table>
                        <tbody>
                        <tr><th style={{width:"90vw", textAlign: "center"}}>Resolution</th><th style={{width:"10vw", textAlign: "center"}}>Voting</th></tr>
                        {meeting.resolutions.map( (resolution, index) => {
                                return (
                                    <tr key={`key${index}`}><td>{resolution.title}</td><td>{resolution.voting}</td></tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            )
        })
    )
}

const accordGenerator = (year) => {
    let yearData;
    if (year === "2018"){
        yearData = tboard2018;
    }
    // const yearData = tboard2018;
    return(
        yearData.map((month, index) => {
            return (
                <div key={`key${index}`} data-trigger={ monthsArr[index] }>
                    <Accordion>
                        {monthAccordionGenerator(month)}
                    </Accordion>
                </div>
            )
        }
        ))};

class TownBoard extends Component {
    render() {
        return (
            <StyledTownBoard>
                <h2>Town Board Votes</h2>
                <Accordion>
                    {yearsAccordionGenerator(yearsAvailable)}
                </Accordion>
            </StyledTownBoard>
        )
    }
};


export default TownBoard;