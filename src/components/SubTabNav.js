import React, { Component } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {css, down, up} from "@smooth-ui/core-sc";

const StyledSubTab = styled.div`
${down('sm', css`
  display: none;
`) }

${up('sm', css`
  padding-right: 10vw;
  font-size: small;
`) }

ul {
  display: inline;
  padding: 0;
}

li {
  display: inline-block;
  transition-duration: 0.5s;
}
li:hover {
  cursor: pointer;
}

.navigation {
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 1rem;
  margin-top: 0.5rem;
}
.navigation li * {
  outline: none !important;
}
.navigation li a, .navigation li span {
  background: transparent;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem 1rem;
  transition: background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  text-decoration: none;
  color: #000;
  display:block;
  border-bottom: 1px solid #000000;
}

.navigation li a:hover,
.navigation li a:focus,
.navigation li span:hover,
.navigation li span:focus{
  outline: 0;
  background-color: #f4f4f4;
  cursor: pointer;
}

.navigation li a.active, 
.navigation li span.active {
  position: relative;
  font-weight: bold;
  background-color: #FFC000;
}



.navigation li a.active:after,
.navigation li span.active:after {
  content: '';
  position: absolute;
}

.navigation li a.active:after, 
.navigation li span.active:after {
  bottom: -1px;
  left: 0;
  width: 100%;
  border-bottom: 3px solid #000;
}

ul li ul.subDropDown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
  z-index: 20;
}

ul li:hover > ul.subDropDown,
ul li ul.subDropDown:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}


`;


class TabNav extends Component {
    render() {
        const { tabConfig }  = this.props;

        return (
            <StyledSubTab>
                <ul className="navigation">
                        {tabConfig.map( (tab, index) => {
                            const tabNum = index.toString();
                            return(
                                <li>
                                    <NavLink key={"sub" + index} exact to={tab.route}>
                                        {tab.tabText}
                                    </NavLink>
                                </li>
                            )
                        })}
                </ul>

            </StyledSubTab>

        );
    }
}

export default TabNav;