package org.wirvsvirus.shareyourcart.mongodb.repos;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.wirvsvirus.shareyourcart.objects.ShoppingItem;

import java.util.Date;

@Component
public interface ShoppingItemRepository extends MongoRepository<ShoppingItem, String> {

}
