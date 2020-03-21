/* eslint-disable react/style-prop-object */
import React, { useState, useRef } from 'react';

import './MapComponent.css';
import { MapMarkerComponent } from './MapMarkerComponent';
import { Map, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { MapUserDetailComponent } from './MapUserDetailComponent';

import MAP_DATA, { DEFAULT_LOCATION } from '../fixtures/samplemapdata';
import { Button } from '@material-ui/core';
import MapBoxGLLayer from './MapBoxGLLayer';

import {useHistory} from 'react-router-dom';

export const MapComponent = () => {
    const history = useHistory();

    const mapRef = useRef<any>(null);
    const [currentCenter, setCurrentCenter] = useState(DEFAULT_LOCATION);
    const [currentZoom, setCurrentZoom] = useState<number>(21);

    const [displayedUser, setDisplayedUser] = useState<string | null>(null);
    const [lastDisplayedUser, setLastDisplayedUser] = useState<string | null>(null);
    const handleMove = () => {
        setCurrentCenter(mapRef?.current.leafletElement.getCenter());
    }
    
    const handleZoom = (a) => {
        setCurrentZoom(mapRef?.current.leafletElement.getZoom());
    }

    const locateMe = () => {
        mapRef?.current.leafletElement.locate();
    }

    const handleLocationFound = (e: Object) => {
        setCurrentCenter((e as any).latlng);
      }

    return <>
        <Button onClick={locateMe}>GEOLOCATE</Button>
        <Map
            zoomControl={false}
            onZoomend={handleZoom}
            animate={true}
            center={currentCenter}
            ref={mapRef}
            zoom={currentZoom}
            onlocationfound={handleLocationFound}
            onMoveend={handleMove}
        >
            {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
            <MapBoxGLLayer
                accessToken='not-needed'
                style='https://api.maptiler.com/maps/16633042-281e-40f2-8efe-e2628c8b1685/style.json?key=RFYxgHv45nsn3176diJN'
            />
            {MAP_DATA.map(user => <Marker
                icon={MapMarkerComponent}
                data-counter={user.shoppingItems?.length}
                key={user.id!!}
                position={[user.homePosition?.lat, user.homePosition?.lng] as LatLngTuple}
                onClick={() => { setDisplayedUser(user.id!!); history.push('/cart/userid2') }}
            ></Marker>)}
            <ZoomControl position="bottomright"/>
        </Map>
        {displayedUser && <MapUserDetailComponent
            userId={displayedUser}
            onClose={() => {setDisplayedUser(null)}}
        />}
    </>;
}
