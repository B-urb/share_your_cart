import L from 'leaflet';

import './MapMarkerComponent.css';
import { userMarker } from './svg/userMarker';

export const UserIconMarkerComponent = new L.Icon({
    iconUrl: userMarker,
    iconSize: [40, 60],
    iconAnchor: [20, 50],
    className: 'MapMarker'
});

export default UserIconMarkerComponent;
