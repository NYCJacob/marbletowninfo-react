import React, { Component } from 'react';
import styled from "styled-components";


const StyledAcreLegend = styled.div`
    float: left;
    position: absolute;
    top: 27vh;
    //margin-left: .1vw;
    background: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    overflow: auto;
    border-radius: 3px;
    padding: .2rem;
    margin-left: .3em;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1rem;
    width: 10vw;
    .under10 {
        background-color: #ffffff;
    }
    
    .over10 {
        background-color: #f0f0f0;
    }
    
    .over25 {
        background-color: #bdbdbd;
    
    }
    .over100 {
        background-color: #636363;
    
    }
    
    @media (min-width: 992px){ 
      top: 33vh;
      font-size: x-small;
    }
    
    @media (max-width: 991px) and (min-width: 768px){   //md - lg
      top: 31vh;
      font-size: x-small;
    }
    @media (max-width: 767px) {
      top: 30vh;
      font-size: x-small;
    }
`;



class AcreLegend extends Component {
    render() {
        return(
            <StyledAcreLegend>
                <div className="under10">0 - 10 Acres</div>
                <div className="over10">10 - 25 Acres</div>
                <div className="over25">over 25 Acres</div>
                <div className="over100">over 100 Acres</div>
            </StyledAcreLegend>
        );
    }
};

export default AcreLegend;