import React from "react";
import styled from "styled-components";
import Grid from "hedron";



const StyledB2Button = styled.button`
        background: rgb(202, 228, 189),
        borderRadius: 3;
        border: 0;
        color: black;
        padding: .1em;
        flex: 1;
`;

const StyledA2Button = styled(StyledB2Button)`
            background: rgb(202, 228, 189);
`;

const StyledA3Button = styled(StyledB2Button)`
            background: rgb(168, 219, 66);
`;

const StyledA4Button = styled(StyledB2Button)`
            background: { rgb(92, 138, 69);
`;

const StyledB1Button = styled(StyledB2Button)`
            background: rgb(241, 182, 182);
`;

const StyledIBButton = styled(StyledB2Button)`
            background: #e5ccf3;
`;

const StyledI1Button = styled(StyledB2Button)`
            background: #f3a65a;
`;

const StyledR1Button = styled(StyledB2Button)`
            background: #f3f35a;
`;

const StyledR3Button = styled(StyledB2Button)`
            background: #f3f3cc;
`;


export const ZoneLegend = () => (
    <Grid.Bounds direction="horizontal" border="1px solid black">
        <StyledA2Button>A-2</StyledA2Button>
        <StyledA3Button>A-3</StyledA3Button>
        <StyledA4Button>A-4</StyledA4Button>
        <StyledB1Button>B-1</StyledB1Button>
        <StyledB2Button>B-2</StyledB2Button>
        <StyledIBButton>I-B</StyledIBButton>
        <StyledI1Button>I-1</StyledI1Button>
        <StyledR1Button>R-1</StyledR1Button>
        <StyledR3Button>R-3</StyledR3Button>

    </Grid.Bounds>
    );

