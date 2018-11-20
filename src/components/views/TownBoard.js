import React, { Component } from "react";

import styled from "styled-components";
import "../../styles/responsAccord.css";
import { tboard2018 } from "../../api/townboardapi";
import Accordion from "../reactrespaccordion/Accordion";

const StyledTownBoard = styled.section`
  
`;

const monthsArr =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const yearsAvailable = ["2018"];

const yearsAccordionGenerator = (years) =>{
    return(
        years.map((year) => {
            return(
                <div data-trigger={year} optionalclassname="years">
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
        month.map(( meeting ) => {
            let date = new Date(meeting.date).toUTCString();

            return (
                <div data-trigger={date} optionalclassname="meetingPane">
                    <p>Present: {meeting.present}</p>
                    <table>
                        <th><td>Resolution</td><td style={{width:"95vw", textAlign: "right"}}>Voting</td></th>
                        {meeting.resolutions.map( (resolution) => {
                                return (
                                    <tr><td>{resolution.title}</td><td>{resolution.voting}</td></tr>
                                )
                            }
                        )}
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
                <div data-trigger={ monthsArr[index] }>
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