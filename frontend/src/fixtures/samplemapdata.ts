import { User, ShoppingItem } from '../types';
import { LatLngTuple } from 'leaflet';

export const DEFAULT_LOCATION: LatLngTuple = [49.004754, 8.4140153];

const data: Partial<User>[] = [];

for (let i = 0; i < 50; i++) {
    const shoppingItems: ShoppingItem[] = [];
    for (let j = 0; j < Math.floor(Math.random()*5); j++) {
        shoppingItems.push({
            name: `Shopping item ${j+1}`
        } as ShoppingItem);
    }

    data.push({
        id: `User id: ${i}`,
        homePosition: {
            lat: DEFAULT_LOCATION[0] + (Math.random()-0.5)/500,
            lng: DEFAULT_LOCATION[1] + (Math.random()-0.5)/200
        },
        shoppingItems
    })
}

export default data;
