import React from 'react';
import styled from "styled-components";
import Grid from "hedron";

import mapboxgl from 'mapbox-gl';
import "../../styles/mapbox-gl.css";
import { himitsu } from "../../api/config"
import { ZoneLegend } from "../ZoneLedgend";
import MapOverlay from "../MapOverlay";
import AcreLegend from "../AcreLegend";

mapboxgl.accessToken = himitsu.mapboxAPI;

// styles for map copied from body {https://www.mapbox.com/help/choropleth-studio-gl-pt-2/*/

const StyledMap = styled.div`
    #mapGL {
        position: relative;
        top: 0;
        bottom: 0;
        height: 75vh;
        /*width: 100vw;*/
    }
    
    #overlay {
        float: right;
        margin-right: 21vw;
    }
    
    .map-overlay {
        position: absolute;
        top: 30vh;
        // height: 20vh;
        min-height: 10vh;
        background: rgba(255, 255, 255, 0.8);
        margin-right: 0px;
        font-family: Arial, sans-serif;
        overflow: auto;
        border-radius: 3px;
    }
    
    #features {
        top: 0;
        // height: 100px;
        margin-top: 5em;
        width: 20vw;
        float: right;
        margin-bottom: 1em;
    }
    
    #legend-overlay {
        float: left;
        position: absolute;
        top: 6.5vh;
        margin-left: .1vw;
        // min-height: 10vh;
        background: rgba(255, 255, 255, 0.9);
        font-family: Arial, sans-serif;
        overflow: auto;
        border-radius: 3px;
    }
    
    #acres-legend {
        top: 0;
        padding: .2rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        line-height: 16px;
        width: 10vw;
    }
    
    .zone-legend {
        border: solid dimgrey;
    }
    
    .zone-legend p {
        margin-bottom: .1rem;
    }
    
    .A2 {
        background-color: rgb(202, 228, 189)
    }
    
    .A3 {
        background-color: rgb(168, 219, 66)
    }
    
    .A4 {
        background-color: rgb(92, 138, 69)
    }
    
    .B1 {
        background-color: rgb(241, 182, 182)
    }
    
    .B2 {
        background-color: rgb(242, 205, 157)
    }
    
    .IB {
        background-color: #e5ccf3;
    }
    
    .I1 {
        background-color: #f3a65a;
    }
    
    .R1 {
        background-color: #f3f35a;
    }
    
    .R3 {
        background-color:  #f3f3cc
    }
    
    .SR {
        background-color: #c48f72
    }
`;



class ZoningMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parcelDetails: {},
        }
    }


    componentDidUpdate() {
        // this.setFill();
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/nyjacob/cjkls0vmj0mz52rqey0snp39t',
            center: [-74.109661, 41.881201],
            zoom: 11.0
        });

        map.on('load', () => {
            map.addSource('tmarble_shp-09wfzs', {
                "type": "vector",
                "url": "mapbox://nycjacob.c2q8h92i"
            });
            // map.addLayer({
            //     "id": "tmarble-parcels-shp",
            //     "type": "fill",
            //     "source": "tmarble_shp-09wfzs",
            //     "source-layer": "tmarble_shp-09wfzs",
            //     "paint": {
            //         "fill-opacity": 0.1
            //     }
            // });
        });

        map.getCanvas().style.cursor = 'crosshair';


        map.on('mousemove', (e) => {
            const features = map.queryRenderedFeatures(e.point);
            if (features && features[0]){
                console.log( features[0].properties );
                this.setState({
                    parcelDetails: features[0].properties
                })
            }
        });
    }

    render(){
        return (
            <StyledMap>
                <Grid.Bounds direction="vertical">
                    <Grid.Box >
                        <strong>Zone borders:</strong> Hover over zone labels for description
                    </Grid.Box>
                        <ZoneLegend/>

                    <Grid.Box>
                        <div ref={el => this.mapContainer = el} id="mapGL"></div>
                    </Grid.Box>
                    <MapOverlay details={ this.state.parcelDetails } />
                    <AcreLegend/>
                </Grid.Bounds>

            </StyledMap>
        );
    }
}


export default ZoningMap;