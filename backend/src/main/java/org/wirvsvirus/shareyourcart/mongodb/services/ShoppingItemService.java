package org.wirvsvirus.shareyourcart.mongodb.services;

import org.springframework.stereotype.Service;
import org.wirvsvirus.shareyourcart.mongodb.models.ShoppingItemModel;
import org.wirvsvirus.shareyourcart.mongodb.repos.ShoppingItemRepository;

import java.util.List;

@Service
public class ShoppingItemService {
    private final ShoppingItemRepository shoppingItemRepository;

    public ShoppingItemService(ShoppingItemRepository shoppingItemRepository){this.shoppingItemRepository=shoppingItemRepository;}

    public ShoppingItemModel saveItem(ShoppingItemModel shoppingItemModel){
        return shoppingItemRepository.save(shoppingItemModel);
    }

    public List<ShoppingItemModel> findAll(){
        return (List<ShoppingItemModel>) shoppingItemRepository.findAll();
    }
}
