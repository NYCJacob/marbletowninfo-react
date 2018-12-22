import React from 'react';
import styled from "styled-components";
import { Grid, Col, Row, Switch, FormCheck, FormCheckLabel} from '@smooth-ui/core-sc';
import mapboxgl from 'mapbox-gl';
import "../../styles/mapbox-gl.css";
import { himitsu } from "../../api/config"
import { ZoneLegend } from "../ZoneLedgend";
import MapOverlay from "../MapOverlay";
import AcreLegend from "../AcreLegend";
import {mtfarms} from "../../api/mtfarms";
import {farmIcon} from "../../api/farm-15-green";


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
    
    // interactive marker styles from mapbox
    /* Marker tweaks */
    .mapboxgl-popup-close-button {
      display: none;
    }
    
    .mapboxgl-popup-content {
      font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;
      padding: 0;
      width: 180px;
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
`;

class ZoningMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parcelDetails: {},
            agDistricts: false,
            farmMarkers: false
        };
        this.map ="";
        this.toggleLayer = this.toggleLayer.bind(this);
        this.toggleFarmMarkers = this.toggleFarmMarkers.bind(this);
        this.farmMarkers = [];
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

            this.map.addLayer({
                "id": 'farmLocations',
                "type": 'symbol',
                "source": {
                    type: 'geojson',
                    data: mtfarms
                },
                layout: {
                    'icon-image': 'farm-15',
                    'icon-allow-overlap': true
                }
            }, 'agdistricts');
            this.map.setLayoutProperty('farmLocations', 'visibility', 'none');


            // Add an event listener for when a user clicks on the map
            this.map.on('click', function(e) {
                // Query all the rendered points in the view
                var features = this.map.queryRenderedFeatures(e.point, { layers: ['farmLocations'] });

                if (features.length) {
                    var clickedPoint = features[0];
                    // 1. Fly to the point
                    this.flyToStore(clickedPoint);
                    // 2. Close all other popups and display popup for clicked store
                    this.createPopUp(clickedPoint);
                    // // 3. Highlight listing in sidebar (and remove highlight for all other listings)
                    // var activeItem = document.getElementsByClassName('active');
                    // if (activeItem[0]) {
                    //     activeItem[0].classList.remove('active');
                    // }
                    // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
                    // var selectedFeature = clickedPoint.properties.address;
                    //
                    // for (var i = 0; i < mtfarms.features.length; i++) {
                    //     if ( mtfarms.features[i].properties.address === selectedFeature) {
                    //         selectedFeatureIndex = i;
                    //     }
                    // }
                    // // Select the correct list item using the found index and add the active class
                    // var listing = document.getElementById('listing-' + selectedFeatureIndex);
                    // listing.classList.add('active');
                }
            });
        });  // end this.map.on load
        this.loadFarmMarkers();
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

            this.farmMarkers[index] = new mapboxgl.Marker(markerContainer, { offset: [0, -23] })
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

    // flytostore and createpopup taken from mapbox tutorial:
    // https://www.mapbox.com/help/building-a-store-locator/
    flyToStore(currentFeature) {
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
            .setHTML('<h3>Sweetgreen</h3>' +
                '<h4>' + currentFeature.properties.address + '</h4>')
            .addTo(this.map);
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
                                    Show Agriculture Districts
                                </FormCheckLabel>
                            </FormCheck>
                        </Col>
                        <Col background="#40617F">
                            <FormCheck color="white" fontWeight="bold">
                                <Switch id="showFarms" labeled onClick={ this.toggleFarmMarkers() } />
                                <FormCheckLabel htmlFor="showFarms">
                                    Show Active Farms
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