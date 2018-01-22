import React from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class mapApp extends React.Component {
    map;

    componentDidUpdate() {
        this.setFill();
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [5, 34],
            zoom: 1.5
        });

        this.map.on('load', () => {
            this.map.addSource('countries', {
                type: 'geojson',
                data: this.props.data
            });

            this.map.addLayer({
                id: 'countries',
                type: 'fill',
                source: 'countries'
            }, 'country-label-lg'); // ID metches `mapbox/streets-v9`

            this.setFill();
        });

        this.map.on('click',()=>{
            const {lng,lat}=this.map.getCenter();

            console.log(lng);
            console.log(lat);

        });
    }

    setFill() {
        const { property, stops } = this.props.active;
        this.map.setPaintProperty('countries', 'fill-color', {
            property,
            stops
        });
    }

    render() {
        return (
            <div ref={el => this.mapContainer = el} className="absolute top right left bottom"/>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        active: state.active
    };
}

export default connect(mapStateToProps)(mapApp);
