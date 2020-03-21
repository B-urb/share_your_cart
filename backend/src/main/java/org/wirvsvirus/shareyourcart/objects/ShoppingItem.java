package org.wirvsvirus.shareyourcart.objects;

import lombok.Data;

import java.util.Date;

@Data
public class ShoppingItem {
    String id;
    String name;
    String claimedBy;
    Date claimedAt;
    Date deliveredAt;
    Date receivedAt;
}
