package org.wirvsvirus.shareyourcart.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.wirvsvirus.shareyourcart.dto.UserSaveRequest;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;
import org.wirvsvirus.shareyourcart.mongodb.services.UserService;

import java.util.List;
import java.util.Optional;


@RestController
@Slf4j
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){this.userService = userService;}

    @PostMapping("/user")
    public String postUser(@RequestBody UserSaveRequest userSaveRequest) {
        log.info("Request: {}", userSaveRequest);
        UserModel user = userSaveRequest.toUserModel();
        userService.saveUser(user);
        return user.getId();
    }

    @GetMapping("/user")
    public List<UserModel> getUser() {
        return userService.findAll();
    }

    @GetMapping("/user/{uid}")
    public Optional<UserModel> getUser(@PathVariable("uid") String uid)
    {
        return userService.findById(uid);
    }

    @PutMapping("/user/{uid}")
    public String putUser(@PathVariable("uid") String uid) {
        return String.format("Put /user/uid");
    }
    
}
