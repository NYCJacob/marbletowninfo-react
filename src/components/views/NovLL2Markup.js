import React, {Component} from "react";
import styled from "styled-components";
import { NovLL2Html } from "./NovLL2MarkupHtml"


const StyledNovLL2Markup = styled.section`
        .sup-title {
            background: white;
            color: black;
            font-size: x-large;
        }
        .sup-title th {
            padding: 0;
            margin-bottom: 0;
            margin-top: 0;
        }
        .commentary {
            background: lightskyblue;
        }
        #zones-header {
            position: -webkit-sticky;
            position: -moz-sticky;
            position: -ms-sticky;
            position: -o-sticky;
            position: sticky;
            top: 0;
            background: white;
        }
        .outsideAg >td {
            border-top: solid red 5px;
        }

        .new {
            background: greenyellow;
        }
        .deleted {
            background: lightcoral;
            text-decoration: line-through;
        }
        .moved {
             background: yellow;
         }
`;

class NovLL2Markup extends Component {
    render() {
        return(
            <StyledNovLL2Markup>
                <NovLL2Html/>
            </StyledNovLL2Markup>
        )
    }
}

export default NovLL2Markup;