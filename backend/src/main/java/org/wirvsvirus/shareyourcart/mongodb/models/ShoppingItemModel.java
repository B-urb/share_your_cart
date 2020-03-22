package org.wirvsvirus.shareyourcart.mongodb.models;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@Builder
public class ShoppingItemModel{
    @Id
    private String id;
    private String name;
    private String claimedBy;
    private Date claimedAt;
    private Date deliveredAt;
    private Date receivedAt;
}