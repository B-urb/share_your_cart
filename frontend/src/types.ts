interface GPSPosition {
    lat: number;
    lng: number;
}

interface ShoppingItem {
    name: string;
    claimedBy: string; // user_id
    claimedAt: Date;
    deliveredAt: Date;
    receivedAt: Date;
}

interface User {
    id: string;
    phone: string;
    homePosition: GPSPosition;
    shoppingItems: ShoppingItem[];
    updatedAt: Date;
    createdAt: Date;
}
