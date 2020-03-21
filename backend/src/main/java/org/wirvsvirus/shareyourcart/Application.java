package org.wirvsvirus.shareyourcart;


import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
public class Application {

    private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

    private static final DateTime STARTUP_TS = DateTime.now();

    @RequestMapping("/")
    public String home() {
        return String.format("Welcome to the share-your-cart backend! (Running since: %s)", STARTUP_TS);
    }

    @PostMapping("/list")
    public String postList() {
        return String.format("Welcome to the share-your-cart backend! (Running since: %s)", STARTUP_TS);
    }

    @GetMapping("/list/{uid}")
    public String getListUid(@PathVariable("uid") String uid) {
        return String.format("Get /list/uid)", STARTUP_TS);
    }

    @GetMapping("/list/{uid}/{name}")
    public String getListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Get list/uid/name", STARTUP_TS);
    }
    @PutMapping("/list/{uid}/{name}")
    public String putListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Put /list/uid/name", STARTUP_TS);
    }

    @DeleteMapping("/list/{uid}/{name}")
    public String deleteListUidName(@PathVariable("uid") String uid, @PathVariable("name") String name) {
        return String.format("Delete /list/uid/name", STARTUP_TS);
    }

    @PostMapping("/user")
    public String postUser() {
        return String.format("Post /user", STARTUP_TS);
    }

    @GetMapping("/user/{uid}")
    public String getUser(@PathVariable("uid") String uid) {
        return String.format("Get /user/uid", STARTUP_TS);
    }

    @PutMapping("/user/{uid}")
    public String putUser(@PathVariable("uid") String uid) {
        return String.format("Put /user/uid", STARTUP_TS);
    }


    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}