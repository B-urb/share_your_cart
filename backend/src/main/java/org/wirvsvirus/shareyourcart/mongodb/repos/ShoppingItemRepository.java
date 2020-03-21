package org.wirvsvirus.shareyourcart.mongodb.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Component;
import org.wirvsvirus.shareyourcart.mongodb.models.ShoppingItemModel;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;


@Component
public interface ShoppingItemRepository extends MongoRepository<ShoppingItemModel, String> {

}
