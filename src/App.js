import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Grid from "hedron";
import Header from "./components/Header";
import TabNav from "./components/TabNav";
import OverlayHamburger from "./components/OverlayHamburger";
import ZoningMap from "./components/views/ZoningMap";
import TownBoard from "./components/views/TownBoard";
import CensusView from "./components/views/CensusView";
import EventLaw from "./components/views/EventLaw";
import Petition from "./components/views/Petition";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Grid.Provider
                breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
            >
                    <Grid.Bounds direction="vertical">

                        <Grid.Bounds direction="horizontal" display="flex">
                            <Grid.Box sm={{fontSize: "0.5em"}} flex="auto">
                                <Header/>
                            </Grid.Box>
                            <Grid.Box fluid={true} md={{hidden: true}} lg={{hidden: true}} flex="auto">
                                <OverlayHamburger/>
                            </Grid.Box>
                        </Grid.Bounds>

                        <Grid.Box sm={{hidden: true}} md={{ padding: "0"}}>
                            <TabNav/>
                        </Grid.Box>

                        <Grid.Box>
                            <Route exact path="/" component={ZoningMap}/>
                            <Route path="/census" component={CensusView}/>
                            <Route path="/townboard" component={TownBoard}/>
                            <Route path="/eventlaw" component={EventLaw}/>
                            <Route path="/petition" component={Petition}/>
                        </Grid.Box>


                    </Grid.Bounds>
                </Grid.Provider>
        </BrowserRouter>
    );
  }
}

export default App;
