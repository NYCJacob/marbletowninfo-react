import React, { Component } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Tabs, Tab, TabList } from 'react-web-tabs';

const StyledSubTab = styled.div`

@media screen and (max-width: 450px) {
    font-size: smaller;
} 
    
    .rwt__tabs[data-rwt-vertical="true"] {
    display: flex;
}

.rwt__tablist:not([aria-orientation="vertical"]) {
  border-bottom: none;
  border-top: solid 1px #ffad2c;
}

.rwt__tablist[aria-orientation="vertical"] {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    //border-right: 1px solid #ddd;
    margin-right: 1rem;
}

.rwt__tab {
    background: transparent;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    padding: 0.2rem 2rem;
    transition: background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    @media screen and (max-width: 450px) {
    padding: 0.2rem 0.5rem;
  }
}

.rwt__tab[aria-selected="false"]:hover,
.rwt__tab:focus {
    outline: 0;
    background-color: #f4f4f4;
    background-color: rgba(0,0,0,0.05);
}


.rwt__tab[aria-selected="false"] {

  border: solid 1px #ffad2c;
}

.rwt__tab[aria-selected="true"] {
    position: relative;
    font-weight: bold;
   color: white;
   background-color: #ffad2c;
}

.rwt__tab[aria-selected="true"]:after {
    content: '';
    position: absolute;
}

.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:after {
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: none;
}

.rwt__tablist[aria-orientation="vertical"] .rwt__tab[aria-selected="true"]:after {
    right: -1px;
    top: 0;
    height: 100%;
}
`;


class TabNav extends Component {
    render() {
        const { tabConfig }  = this.props;

        return (
            <StyledSubTab>
                <Tabs defaultTab="sub0">
                    <TabList>
                        {tabConfig.map( (tab, index) => {
                            const tabNum = index.toString();
                            return(
                                <NavLink key={index} to={tab.route}>
                                    <Tab tabFor={"sub" + tabNum}>{tab.tabText}</Tab>
                                </NavLink>
                            )
                        })}
                    </TabList>
                </Tabs>
            </StyledSubTab>

        );
    }
}

export default TabNav;