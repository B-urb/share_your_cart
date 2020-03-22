package org.wirvsvirus.shareyourcart.dto;

import lombok.Data;
import org.wirvsvirus.shareyourcart.mongodb.models.ShoppingItemModel;

import java.util.Date;

@Data
public class ItemSaveRequest {
    String name;
    String claimedBy;
    Date claimedAt;
    Date deliveredAt;
    Date receivedAt;

    public ShoppingItemModel toShoppingItemModel(){
        return ShoppingItemModel.builder()
                .name(this.name)
                .claimedBy(this.claimedBy)
                .claimedAt(this.claimedAt)
                .deliveredAt(this.deliveredAt)
                .receivedAt(this.receivedAt)
                .build();
    }
}
