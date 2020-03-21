import React from 'react';
import { 
    Switch,
    Route,
} from 'react-router-dom';
import { MapComponent } from '../components/MapComponent';
import BottomTabBar from '../components/BottomTabBar';
import CartComponent from '../components/CartComponent';
import OwnCartComponent from '../components/OwnCartComponent';
import ProfileComponent from '../components/ProfileComponent';
import {loggedInUser, dummyUser} from '../fixtures/sampleuserdata';
//import {dummyClaimedItems} from '../fixtures/samplemapdata';

export default function Navigation () {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <MapComponent/>
                </Route>
                
                <Route exact path="/cart/:id">
                    <CartComponent currentUser={loggedInUser} cartUser={dummyUser} />
                </Route>
                
                <Route exact path="/cart">
                    <OwnCartComponent currentUser={loggedInUser} />
                </Route>

                <Route exact path="/profile">
                    <ProfileComponent/>
                </Route>
            </Switch>
            <BottomTabBar/>
        </div>
    );
}


