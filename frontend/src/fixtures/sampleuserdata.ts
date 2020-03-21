import {User} from '../types';

export const loggedInUser: User = {
id: 'felix',
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
    claimedBy: "maurice", // user_id
    claimedAt: new Date(),
    deliveredAt: new Date(),
    receivedAt: null,
    },
],
updatedAt: new Date(),
createdAt: new Date(),
};

export const dummyUser: User = {
id: 'maurice',
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
    claimedBy: "felix", // user_id
    claimedAt: new Date(),
    deliveredAt: new Date(),
    receivedAt: null,
    },
    {
        id: "124",
        name: "Gabeln",
        claimedBy: "felix", // user_id
        claimedAt: new Date(),
        deliveredAt: new Date(),
        receivedAt: null,
    },
],
updatedAt: new Date(),
createdAt: new Date(),
};

export const dummyClaimedItems = [
    {
        owner: "maurice",
        id: "asjfdsfksjfl",
        name: "Mehl",
        claimedBy: "felix", // user_id
        claimedAt: new Date(),
        deliveredAt: null,
        receivedAt: null,
    },
    {
        owner: "maurice",
        id: "asjfdksaghsdsjfl",
        name: "Reis",
        claimedBy: "felix", // user_id
        claimedAt: new Date(),
        deliveredAt: null,
        receivedAt: null,
    },
];