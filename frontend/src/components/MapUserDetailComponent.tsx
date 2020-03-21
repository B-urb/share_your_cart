import React, { EventHandler } from 'react';
import { Button } from '@material-ui/core';

interface MapUserDetailComponentProps {
    userId: string;
    onClose: EventHandler<any>;
}

export const MapUserDetailComponent: React.FC<MapUserDetailComponentProps> = ({ userId, onClose }) => {

    return <div>
        <Button onClick={onClose}>Close</Button>
        <p>This is page for user {userId}</p>
    </div>
};

export default MapUserDetailComponent;
