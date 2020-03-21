import React, { useEffect } from 'react';
import L, { LatLngTuple } from 'leaflet';
import UserIconMarkerComponent from './UserMarkerComponent';
import { Popup, Marker, Circle } from 'react-leaflet';

interface MapUserMarkerComponentProps {
    position: LatLngTuple;
}

export const MapUserMarkerComponent: React.FC<MapUserMarkerComponentProps> = ({ position: userPosition }) => {
    const [radius, setRadius] = React.useState(50);
    const [handlerPosition, setHandlerPosition] = React.useState<any>();
    const handlerRef = React.useRef<any>();

    useEffect(() => {
        const userCoords = L.latLng(userPosition);
        const circleBounds = userCoords.toBounds(radius*2);
    
        setHandlerPosition([(userPosition as any).lat, circleBounds.getEast()]);
    }, [userPosition]);

    // const [handlePosition, setHandlePosition] = React.useState();

    const handleDrag = (a) => {
        if (handlerRef.current) {
            const nextHandlerPos = handlerRef.current.leafletElement.getLatLng()
            setRadius(nextHandlerPos.distanceTo(userPosition));
            setHandlerPosition(nextHandlerPos);
        }
    }
    
    return <>
        <Marker position={userPosition as unknown as LatLngTuple}
            icon={UserIconMarkerComponent}>
            <Popup>Ihr Standort</Popup>
        </Marker>}
        <Circle stroke={false} center={userPosition as unknown as LatLngTuple} radius={radius} />
        {handlerPosition && <Marker ref={handlerRef} position={handlerPosition as any}
            draggable={true}
            onDrag={handleDrag}
        />}
    </>;
}

export default MapUserMarkerComponent;
