import React, { Component } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Tabs, Tab, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';


const StyledTab = styled.div`
    margin: 0.11rem;

    .rwt__tabs[data-rwt-vertical="true"] {
    display: flex;
}

.rwt__tablist:not([aria-orientation="vertical"]) {
    border-bottom: 1px solid #ddd;
}

.rwt__tablist[aria-orientation="vertical"] {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    border-right: 1px solid #ddd;
    margin-right: 1rem;
}

.rwt__tab {
    background: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem 1rem;
    transition: background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.rwt__tab[aria-selected="false"]:hover,
.rwt__tab:focus {
    outline: 0;
    background-color: #f4f4f4;
    background-color: rgba(0,0,0,0.05);
}

.rwt__tab[aria-selected="true"] {
    position: relative;
    font-weight: bold;
}

.rwt__tab[aria-selected="true"]:after {
    content: '';
    position: absolute;
}

.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:after {
    bottom: -1px;
    left: 0;
    width: 100%;
    // border-bottom: 3px solid #00d8ff;
    border-bottom: 3px solid #FFCF00;
}

.rwt__tablist[aria-orientation="vertical"] .rwt__tab[aria-selected="true"]:after {
    right: -1px;
    top: 0;
    height: 100%;
    border-right: 3px solid #00d8ff;
}
li {
 display: inline-block;
 transition-duration: 0.5s;
}

li:hover {
  cursor: pointer;
}

ul {
  display: inline;
  padding: 0;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  //margin-top: 1rem;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  //width: 100%;
}

`;


class TabNav extends Component {
    render() {
        return (
            <StyledTab>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                    <TabList>
                        <NavLink exact to="/">
                            <Tab tabFor="one">Zoning</Tab>
                        </NavLink>
                        <NavLink exact to="/census">
                            <Tab tabFor="two">Census</Tab>
                        </NavLink>
                        <NavLink exact to="/townboard">
                            <Tab tabFor="three">Town Board</Tab>
                        </NavLink>
                        {/*<NavLink exact to="/eventlaw/draftlaw">*/}
                            {/*<Tab tabFor="four">Event Law</Tab>*/}
                        {/*</NavLink>*/}
                        {/*<TabList>*/}
                        <ul>
                            <li>
                                <Tab tabFor="#" className="subHeading">Proposed Laws</Tab>
                                <ul className="dropDown">
                                    <Tab tabFor="#" className="subDropDown">Event Law</Tab>
                                    <Tab tabFor="#" className="subDropDown">Acc Apt/SUP Rev.</Tab>
                                </ul>
                            </li>
                        </ul>
                        {/*</TabList>*/}
                        <NavLink exact to="/petition">
                            <Tab tabFor="five">Petition</Tab>
                        </NavLink>
                    </TabList>

                </Tabs>
            </StyledTab>

        );
    }
}

export default TabNav;