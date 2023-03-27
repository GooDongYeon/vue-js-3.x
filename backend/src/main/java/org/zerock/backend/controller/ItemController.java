package org.zerock.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.backend.entity.Item;
import org.zerock.backend.repository.ItemRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {
  @Autowired
  ItemRepository itemRepository;

    @GetMapping("/api/items")
  public List<Item> getItems() {
    List<Item> items = itemRepository.findAll();
    return items;
  }

//  @GetMapping("/api/items")
//  public List<String> getItems() {
//    List<String> items = new ArrayList<>();
//    items.add("a");
//    items.add("b");
//    items.add("c");
//
//    return items;
//  }
}
