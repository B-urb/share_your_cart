import {User} from '../types';

export const loggedInUser: User = {
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

export const dummyUser: User = {
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