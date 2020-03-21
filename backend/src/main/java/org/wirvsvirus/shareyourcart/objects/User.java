package org.wirvsvirus.shareyourcart.objects;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    String id;
    String name;
    String phone;
    GPSPosition homePosition;
    ShoppingItem[] shoppingItems;
    Date updatedAt;
    Date createdAt;
}
