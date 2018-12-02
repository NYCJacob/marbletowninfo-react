import React, { Component } from 'react';
import styled from "styled-components";

const StyledMapOverlay = styled.div`
    position: absolute;
    top: 28vh;
    left: 62vw;
    min-height: 10vh;
    background: rgba(255, 255, 255, 0.8);
    font-family: Arial, sans-serif;
    overflow: auto;
    border-radius: 3px;
    width: 30vw;
    p {
        text-align: center;
        font-size: large;
        color: #0033ff;
    }
    #details {
      font-size: large;
    }
    
    @media (max-width: 991px) and (min-width: 768px){   //md - lg
      top: 14vh;
      font-size: x-small;
    }
    @media (max-width: 767px) {
      top: 18vh;
      font-size: x-small;
    }
    
`;


class MapOverlay extends Component {
    render() {
        return(
            <StyledMapOverlay>
                { this.props.details.ACRES ?
                    <div id="details">
                        <div>Zoning: {this.props.details.ZONING}</div>
                        <div>Acres: {this.props.details.ACRES}</div>
                        <div>Address: {this.props.details.ADDRESS_NU} {this.props.details.ADDRESS_NA}</div>
                    </div>
                    :
                    <p><strong>Hover over parcel for details.</strong></p>
                }
            </StyledMapOverlay>
        );
    }
};

export default MapOverlay;