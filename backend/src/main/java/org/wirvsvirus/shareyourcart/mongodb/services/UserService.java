package org.wirvsvirus.shareyourcart.mongodb.services;

import org.springframework.stereotype.Service;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;
import org.wirvsvirus.shareyourcart.mongodb.repos.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){this.userRepository=userRepository;}

    public UserModel saveUser(UserModel userModel){
        return userRepository.save(userModel);
    }

    public List<UserModel> findAll(){
        return (List<UserModel>) userRepository.findAll();
    }

    public Optional<UserModel> findById(String id){
        return userRepository.findById(id);
    }
}
