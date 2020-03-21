export interface GPSPosition {
    lat: number;
    lng: number;
}

export interface ShoppingItem {
    [index: string]: any;
    id: string;
    name: string;
    claimedBy: string | null; // user_id
    claimedAt: Date | null;
    deliveredAt: Date | null;
    receivedAt: Date | null;
}

export interface User {
    id: string;
    name: string;
    phone: string;
    homePosition: GPSPosition;
    shoppingItems: ShoppingItem[];
    updatedAt: Date;
    createdAt: Date;
}
