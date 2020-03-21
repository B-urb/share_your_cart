import L from 'leaflet';

import './MapMarkerComponent.css';
import { urlString } from './svg/svgMarker';

export const MapMarkerComponent = (num: number) => new L.Icon({
    iconSize: [36, 50],
    iconAnchor: [18, 25],
    iconUrl: urlString(num),
    className: 'MapMarker'
});

export default MapMarkerComponent;
