package org.wirvsvirus.shareyourcart;


import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class Application {

    private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

    private static final DateTime STARTUP_TS = DateTime.now();

    @RequestMapping("/")
    public String home() {
        return String.format("Welcome to the share-your-cart backend! (Running since: %s)", STARTUP_TS);
    }



    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}