import React, { Component } from 'react';
import styled, {css} from "styled-components";
import { down } from '@smooth-ui/core-sc'
import { NavLink } from 'react-router-dom';
import { Tabs, Tab, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';


const StyledTab = styled.div`
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
  border-right: 1px solid #ddd;
  margin-right: 1rem;
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
}

.navigation li a:hover,
.navigation li a:focus,
.navigation li span:hover,
.navigation li span:focus{
  outline: 0;
  background-color: #f4f4f4;
  cursor: pointer;
}

.navigation li a.active {
  position: relative;
  font-weight: bold;
}

.navigation li a.active:after {
  content: '';
  position: absolute;
}

.navigation li a.active:after {
  bottom: -1px;
  left: 0;
  width: 100%;
  border-bottom: 3px solid #FFCF00;
}

ul li ul.subDropDown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
}

ul li:hover > ul.subDropDown,
ul li ul.subDropDown:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li:hover i {
  color: #FFCF00;
}

ul li ul.subDropDown li {
  clear: both;
}

.subDropDown {
  border: solid #FFCF00 1px;
  background: white;
  opacity: 1;
  margin-left: -50px;
}



`;

class TabNav extends Component {

    render() {
        return (
            <ul className="navigation">
                <li>
                    <NavLink exact to="/">
                        Zoning
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/census">
                        Census
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/townboard">
                        Town Board
                    </NavLink>
                </li>
                <li classname="proposed-laws">
                    <span>Proposed Laws</span>
                    <ul className="dropDown">
                        <li>
                            <NavLink to="/proposedlaws/events">
                                Event Law
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/proposedlaws/accaptsup">
                                Acc Apt/SUP Rev
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink exact to="/petition">
                        Petition
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">
                        Contact/About
                    </NavLink>
                </li>
            </ul>

        );
    }
}

export default TabNav;