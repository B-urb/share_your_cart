package org.wirvsvirus.shareyourcart.mongodb.models;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.wirvsvirus.shareyourcart.objects.GPSPosition;
import org.wirvsvirus.shareyourcart.objects.ShoppingItem;

import java.util.Date;


@Document
@Data
@Builder
public class UserModel{
    @Id
    private String id;
    private String name;
    private String phone;
    GPSPosition homePosition;
    ShoppingItem[] shoppingItems;
    Date updatedAt;
    Date createdAt;

}