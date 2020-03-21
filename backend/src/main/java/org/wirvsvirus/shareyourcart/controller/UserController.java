package org.wirvsvirus.shareyourcart.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.wirvsvirus.shareyourcart.dto.UserSaveRequest;
import org.wirvsvirus.shareyourcart.mongodb.models.UserModel;
import org.wirvsvirus.shareyourcart.mongodb.services.UserService;

import java.util.List;


@RestController
@Slf4j
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){this.userService = userService;}

    @PostMapping("/user")
    public ResponseEntity postUser(@RequestBody UserSaveRequest userSaveRequest) {
        log.info("Request: {}", userSaveRequest);
        userService.saveUser(userSaveRequest.toUserModel());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/user")
    public List<UserModel> getUser() {
        return userService.findAll();
    }

    @GetMapping("/user/{uid}")
    public String getUser(@PathVariable("uid") String uid) {
        return String.format("Get /user/uid");
    }

    @PutMapping("/user/{uid}")
    public String putUser(@PathVariable("uid") String uid) {
        return String.format("Put /user/uid");
    }
    
}
