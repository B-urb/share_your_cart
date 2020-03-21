import React from 'react';
import './App.css';
import SampleComponent from './components/SampleComponent';
import CartComponent from './components/CartComponent';
import OwnCartComponent from './components/OwnCartComponent';
import {User} from './types';

const loggedInUser: User = {
  id: 'useridfelix',
  name: 'Felix',
  phone: '123456789',
  homePosition: {
    lat: 123,
    lng: 123,
  },
  shoppingItems: [
    {
      id: "dssdfds",
      name: "Kerzen",
      claimedBy: null, // user_id
      claimedAt: null,
      deliveredAt: null,
      receivedAt: null,
    },
    {
      id: "12ddssd4",
      name: "Klopapier",
      claimedBy: "useridfelix", // user_id
      claimedAt: new Date(),
      deliveredAt: new Date(),
      receivedAt: null,
    },
  ],
  updatedAt: new Date(),
  createdAt: new Date(),
};

const dummyUser: User = {
  id: 'userid2',
  name: 'Maurice',
  phone: '123456789',
  homePosition: {
    lat: 122,
    lng: 122,
  },
  shoppingItems: [
    {
      id: "asjfdksjfl",
      name: "Butter",
      claimedBy: null, // user_id
      claimedAt: null,
      deliveredAt: null,
      receivedAt: null,
    },
    {
      id: "124",
      name: "Nudeln",
      claimedBy: "useridfelix", // user_id
      claimedAt: new Date(),
      deliveredAt: new Date(),
      receivedAt: null,
    },
  ],
  updatedAt: new Date(),
  createdAt: new Date(),
};

function App() {

  return (
    <div className="App">
      <SampleComponent />
      <CartComponent currentUser={loggedInUser} cartUser={dummyUser} />
      <OwnCartComponent currentUser={loggedInUser} />
    </div>
  );
}

export default App;
