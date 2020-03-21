package org.wirvsvirus.shareyourcart;

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


    @RequestMapping("/")
    public String home() {
        return String.format("Welcome to the share-your-cart backend!");
    }

    @PostMapping("/list")
    public String postList() {
        return String.format("Post /list");
    }

    @GetMapping("/list/{uid}")
    public String getListUid(@PathVariable("uid") String uid) {
        return String.format("Get /list/uid)");
    }

    @GetMapping("/list/{uid}/{name}")
    public String getListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Get list/uid/name");
    }
    @PutMapping("/list/{uid}/{name}")
    public String putListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Put /list/uid/name");
    }

    @DeleteMapping("/list/{uid}/{name}")
    public String deleteListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Delete /list/uid/name");
    }

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
