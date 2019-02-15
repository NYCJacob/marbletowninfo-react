import React from 'react';
import styled from "styled-components";
import { Grid, Col, Row, Button, Switch, FormCheck, FormCheckLabel} from '@smooth-ui/core-sc';
import mapboxgl from 'mapbox-gl';
import "../../styles/mapbox-gl.css";
import { himitsu } from "../../api/config"
import { ZoneLegend } from "../ZoneLedgend";
import MapOverlay from "../MapOverlay";
import AcreLegend from "../AcreLegend";
import { mtfarms } from "../../api/mtfarms";
import { mtAgas } from "../../api/mtAgas";
import { farmIcon } from "../../api/farm-15-green";
import { bankIcon } from "../../api/bank-15-green";


mapboxgl.accessToken = himitsu.mapboxAPI;

// styles for map copied from body {https://www.mapbox.com/help/choropleth-studio-gl-pt-2/*/
const StyledMap = styled.div`
* { box-sizing: border-box; }

    #mapGL {
        position: relative;
        top: 0;
        bottom: 0;
        height: 70vh;
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
        padding: .2rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        line-height: 1em;
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
    
    // interactive marker styles from mapbox
    
    .mapboxgl-popup {
      padding-bottom: 50px;
    }
    
    .mapboxgl-popup-close-button {
      //display: none;
    }
    
    .mapboxgl-popup-content {
      font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;
      padding: 0;
      width: 180px;
      z-index: 1;
    }
    
    .mapboxgl-popup-content-wrapper {
      padding: 1%;
    }

    
    .mapboxgl-popup-content h3 {
      background: #91c949;
      color: #fff;
      margin: 0;
      display: block;
      padding: 10px;
      border-radius: 3px 3px 0 0;
      font-weight: 700;
      margin-top: -15px;
    }
    
    .mapboxgl-popup-content h4 {
      margin: 0;
      display: block;
      padding: 10px;
      font-weight: 400;
    }
    
    .mapboxgl-popup-content div {
      padding: 10px;
    }
    
    .mapboxgl-container .leaflet-marker-icon {
      cursor: pointer;
    }
    
    .mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
      margin-top: 15px;
    }
    
    .mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
      border-bottom-color: #91c949;
    }  
    .marker {
      border: none;
      cursor: pointer;
      height: 56px;
      width: 56px;
      background-image: url(../../api/farm-15-green.js);
      background-color: rgba(0, 0, 0, 0);
      z-index: 19;
    }

`;

class ZoningMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parcelDetails: {},
            agDistricts: false,
            farmMarkers: false,
            agasMarkers: false
        };
        this.map ="";
        this.markerContainer = null;
        this.toggleLayer = this.toggleLayer.bind(this);
        this.toggleFarmMarkers = this.toggleFarmMarkers.bind(this);
        this.toggleAgAs = this.toggleAgAs.bind(this);
        this.resetZoom = this.resetZoom.bind(this);
        this.farmMarkers = [];
        this.agasMarkers = [];
    }

    loadMap() {
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

        });  // end this.map.on load
        this.loadFarmMarkers();
        this.loadAgAsMarkers();
    }  // end loadmap()

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

    loadFarmMarkers() {
        mtfarms.features.forEach(function (marker, index) {
            // Create the custom markers, set their position, and add to map
            // new mapboxgl.Marker(this.markerContainer, { offset: [0, -23] })
            let markerContainer = document.createElement('div');
            markerContainer.className="marker";
            markerContainer.innerHTML += farmIcon;
            markerContainer.addEventListener('click', function (e) {
                this.flyToLocation(marker);
                this.createPopUp(marker);
                e.stopPropagation();
            }.bind(this));

            this.farmMarkers[index] = new mapboxgl.Marker(markerContainer, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates);
        }.bind(this));
    }

    loadAgAsMarkers() {
        mtAgas.features.forEach(function (marker, index) {
            let markerContainer = document.createElement('div');
            markerContainer.className="marker";
            markerContainer.innerHTML += bankIcon;
            markerContainer.addEventListener('click', function (e) {
                this.flyToLocation(marker);
                this.createPopUp(marker);
                e.stopPropagation();
            }.bind(this));

            this.agasMarkers[index] = new mapboxgl.Marker(markerContainer, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates);
        }.bind(this));
    }

    toggleFarmMarkers() {
        if ( !this.state.farmMarkers ){
            this.farmMarkers.forEach(function (marker, index){
                marker.addTo(this.map);
            }.bind(this) );
            this.setState( {
                farmMarkers: true
            })
        }else {
            this.farmMarkers.forEach(function (marker, index){
                marker.remove(this.map);
            }.bind(this) );
            this.setState( {
                farmMarkers: false
            })
        }
    }

    toggleAgAs() {
        if ( !this.state.agasMarkers ){
            this.agasMarkers.forEach(function (marker, index){
                marker.addTo(this.map);
            }.bind(this) );
            this.setState( {
                agasMarkers: true
            })
        }else {
            this.agasMarkers.forEach(function (marker, index){
                marker.remove(this.map);
            }.bind(this) );
            this.setState( {
                agasMarkers: false
            })
        }
    }

    // flytostore and createpopup taken from mapbox tutorial:
    // https://www.mapbox.com/help/building-a-store-locator/
    flyToLocation(currentFeature) {
        this.map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        // Check if there is already a popup on the map and if so, remove it
        if (popUps[0]) popUps[0].remove();

        var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>' + currentFeature.properties.name + '</h3><h4>details coming soon</h4>')
            .addTo(this.map);
    }

    resetZoom() {
        this.map.flyTo({
                center: [-74.1650304, 41.8660716],
                zoom: 11.0
            });
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/nyjacob/cjkls0vmj0mz52rqey0snp39t',
            // center: [-74.109661, 41.881201],
            center: [-74.1650304, 41.8660716],
            zoom: 11.0
        });
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

                    <Row style={ {fontSize: ".75em"}}>
                        <Col background="#40617F" style={ {paddingTop: '0.2em'} }>
                            <FormCheck color="white" fontWeight="bold">
                                <Switch id="agDist" labeled onClick={this.toggleLayer} />
                                <FormCheckLabel htmlFor="agDist">
                                    NYS Agriculture Districts
                                </FormCheckLabel>
                            </FormCheck>
                        </Col>
                        <Col background="#40617F" style={ {paddingTop: '0.2em'} }>
                            <FormCheck color="white" fontWeight="bold" >
                                <Switch id="showFarms" labeled onClick={this.toggleFarmMarkers} />
                                <FormCheckLabel htmlFor="showFarms">
                                    Active Farms
                                </FormCheckLabel>
                            </FormCheck>
                        </Col>
                        <Col background="#40617F" style={ {paddingTop: '0.2em'} }>
                            <FormCheck color="white" fontWeight="bold">
                                <Switch id="showAgas" labeled onClick={this.toggleAgAs} />
                                <FormCheckLabel htmlFor="showAgas">
                                    Agriculture Tax Assessments
                                </FormCheckLabel>
                            </FormCheck>
                        </Col>
                        <Col background="#40617F">
                            <Button onClick={this.resetZoom} style={ {margin: '0.25em', padding: '0.25em'} }>
                                Reset Zoom/Center
                            </Button>
                        </Col>
                    </Row>

                </Grid>

            </StyledMap>
        );
    }
}


export default ZoningMap;