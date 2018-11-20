import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import classnames  from "classnames";


const turnDown = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(90deg)
  }
`;
const StyledAccordion = styled.div`
  .active { 
    display: inherit;
  }
  .inactive {
    display: none;
  }
  a {
    margin-left: 1em;
  }
  .drawer {
    border: dashed 1px aquamarine;
  }
  .turnDown {
      animation: ${turnDown} 0.20s linear forwards; 
  }
`;


class DynamicAccordion extends React.Component {
    constructor() {
        super();
        this.state = {
            level0active: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            level0active: !this.state.level0active
        });
    }


    render() {
        const masterAccordion = this.props.details;
        console.log(masterAccordion);

        var accordionDetailsClass= classnames({
            'active': this.state.level0active,
            'inactive': !this.state.level0active
        });

        var turnDownClass = classnames({
            'turnDown': this.state.level0active,
            '': !this.state.level0active
        });

        return (
            <StyledAccordion>
                <FontAwesomeIcon icon={faArrowRight} className={turnDownClass}/>
                <a onClick={this.toggle}>
                    {this.props.summary}
                </a>
                <div className="drawer">
                    {this.props.details.map( (meeting) => (
                      <StyledAccordion className={accordionDetailsClass}>
                          <FontAwesomeIcon icon={faArrowRight} className=" "/>
                          <a onClick={this.toggle}>{meeting.date} </a>
                      </StyledAccordion>
                    ))
                    }
                </div>
            </StyledAccordion>
        );
    }
}
DynamicAccordion.propTypes = {
    summary: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired
};

export default DynamicAccordion;