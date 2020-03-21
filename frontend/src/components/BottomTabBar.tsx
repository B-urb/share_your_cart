import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { MapOutlined, ListOutlined, PersonOutline } from '@material-ui/icons';

import {useHistory} from 'react-router-dom';


export const BottomTabBar = () => {
    const [value, setValue] = React.useState(0);

    const history = useHistory();

    return (
        <div style={{bottom: 0, position: 'absolute', width: '100%'}}>
            <BottomNavigation
                
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction onClick={() => history.push('/')} label="Karte" icon={<MapOutlined />} />
                <BottomNavigationAction onClick={() => history.push('/cart')} label="Einkaufsliste" icon={<ListOutlined />} />
                <BottomNavigationAction onClick={() => history.push('/')} label="Profil" icon={<PersonOutline />} />
            </BottomNavigation>
        </div>
    );
}

export default BottomTabBar;


// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

// <Link to="/">Home</Link>