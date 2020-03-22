package org.wirvsvirus.shareyourcart.mongodb.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;


@Component
public interface UserRepository extends CrudRepository<UserModel, String> {

}
