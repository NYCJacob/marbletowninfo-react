import React from 'react';
import styled from "styled-components";
import { Grid, Col, Row, Typography, Switch, FormCheck, FormCheckLabel} from '@smooth-ui/core-sc';
import mapboxgl from 'mapbox-gl';
import "../../styles/mapbox-gl.css";
import { himitsu } from "../../api/config"
import { ZoneLegend } from "../ZoneLedgend";
import MapOverlay from "../MapOverlay";
import AcreLegend from "../AcreLegend";

mapboxgl.accessToken = himitsu.mapboxAPI;

// styles for map copied from body {https://www.mapbox.com/help/choropleth-studio-gl-pt-2/*/

const StyledMap = styled.div`
* { box-sizing: border-box; }

    #mapGL {
        position: relative;
        top: 0;
        bottom: 0;
        height: 72vh;
    }
    
    #overlay {
        float: right;
        margin-right: 21vw;
    }
    
    .map-overlay {
        position: absolute;
        top: 28vh;
        // height: 20vh;
        min-height: 10vh;
        background: rgba(255, 255, 255, 0.8);
        margin-right: 5px;
        font-family: Arial, sans-serif;
        overflow: auto;
        border-radius: 3px;
    }
    
    #features {
        top: 0;
        // height: 100px;
        margin-top: 5em;
        width: 18vw;
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
            agDistricts: false
        }
        this.map ="";
        this.toggleLayer = this.toggleLayer.bind(this);
    }

    componentDidUpdate() {
        // this.setFill();
    }

    loadMap() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/nyjacob/cjkls0vmj0mz52rqey0snp39t',
            center: [-74.109661, 41.881201],
            zoom: 11.0
        });

        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.getCanvas().style.cursor = 'crosshair';
        this.map.on('mousemove', (e) => {
            const features = this.map.queryRenderedFeatures(e.point);
            if (features && features[0]){
                this.setState({
                    parcelDetails: features[0].properties
                })
            }
        });
        this.map.on('load', (e) => {
            this.map.addLayer({
                "id": "agdistricts",
                "type": "fill",
                "source": {
                    type: 'vector',
                    url: 'mapbox://nyjacob.8qm40n0w'
                },
                "source-layer": "cugir-007995-c70zri",
                "paint": {
                    "fill-opacity": 1,
                    'fill-color': 'rgba(61,153,80,0.55)'
                }
            });
            this.map.setLayoutProperty('agdistricts', 'visibility', 'none');
        });
    }

    toggleLayer() {
        if (!this.state.agDistricts) {
            this.setState({
                agDistricts : true
            });
            this.map.setLayoutProperty('agdistricts', 'visibility', 'visible');

        } else {
            this.map.setLayoutProperty('agdistricts', 'visibility', 'none');
            this.setState({
                agDistricts : false
            });
        }
    }

    componentDidMount() {
            this.loadMap();
    }

    render(){
        return (
            <StyledMap>
                <Grid>
                    <Row >
                        <Col>
                        <ZoneLegend/>
                        </Col>
                    </Row>


                    <Row>
                        <Col border="1px solid #40617F" p={0}>
                            <div ref={el => this.mapContainer = el} id="mapGL"></div>
                        </Col>
                    </Row>
                    <MapOverlay details={ this.state.parcelDetails } />
                    <AcreLegend/>
                    <Row>
                        <Col background="#40617F">
                            <FormCheck color="white" fontWeight="bold">
                                <Switch id="agDist" labeled onClick={this.toggleLayer} />
                                <FormCheckLabel htmlFor="agDist">
                                    Show Agriculture Districts Overlay
                                </FormCheckLabel>
                            </FormCheck>
                        </Col>
                    </Row>
                    <Row>
                        <Col textAlign="center">
                            <footer>
                                &#169; 2018 FutureSense Technologies
                            </footer>
                        </Col>
                    </Row>
                </Grid>

            </StyledMap>
        );
    }
}


export default ZoningMap;