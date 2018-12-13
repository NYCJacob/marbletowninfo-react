import React, {Component} from "react";
import styled from "styled-components";
import { Dec4LL2Html } from "./Dec4LL2Html"


const StyledDec4LL2Markup = styled.section`
        dd, li {
          line-height: 1.75;
          margin: 0 0 1em 0;
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
         .abc {
            list-style-type: lower-alpha;
         }
         .underline {
            text-decoration: underline;
         }
`;

class Dec4LL2Markup extends Component {
    render() {
        return(
            <StyledDec4LL2Markup>
                <Dec4LL2Html/>
            </StyledDec4LL2Markup>
        )
    }
}

export default Dec4LL2Markup;