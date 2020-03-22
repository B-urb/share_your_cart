package org.wirvsvirus.shareyourcart.dto;

import lombok.Data;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;
import org.wirvsvirus.shareyourcart.objects.GPSPosition;
import org.wirvsvirus.shareyourcart.objects.ShoppingItem;

import java.util.Date;

@Data
public class UserSaveRequest {
    String name;
    String phone;
    GPSPosition homePosition;
    ShoppingItem[] shoppingItems;
    Date updatedAt;
    Date createdAt;

    public UserModel toUserModel(){
        return UserModel.builder()
                .name(this.name)
                .phone(this.phone)
                .homePosition(this.homePosition)
                .shoppingItems(this.shoppingItems)
                .updatedAt(this.updatedAt)
                .createdAt(this.createdAt)
                .build();
    }
}
