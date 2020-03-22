package org.wirvsvirus.shareyourcart.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.wirvsvirus.shareyourcart.dto.ItemSaveRequest;
import org.wirvsvirus.shareyourcart.mongodb.models.ShoppingItemModel;
import org.wirvsvirus.shareyourcart.mongodb.services.ShoppingItemService;

import java.util.List;


@RestController
@Slf4j
public class ShoppingItemController {

    private final ShoppingItemService shoppingItemService;

    public ShoppingItemController(ShoppingItemService shoppingItemService){this.shoppingItemService = shoppingItemService;}

    @PostMapping("/list")
    public ResponseEntity postList(ItemSaveRequest itemSaveRequest) {
        log.info("Request: {}", itemSaveRequest);
        shoppingItemService.saveItem(itemSaveRequest.toShoppingItemModel());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/list")
    public List<ShoppingItemModel> getList()
    {
        return shoppingItemService.findAll();
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

}
