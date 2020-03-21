import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { MapOutlined, ListOutlined, PersonOutline } from '@material-ui/icons'


export const BottomTabBar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div style={{bottom: 0, position: 'absolute', width: '100%'}}>
            <BottomNavigation
                
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label="Karte" icon={<MapOutlined />} />
                <BottomNavigationAction label="Einkaufsliste" icon={<ListOutlined />} />
                <BottomNavigationAction label="Profil" icon={<PersonOutline />} />
            </BottomNavigation>
        </div>
    );
}

export default BottomTabBar;
