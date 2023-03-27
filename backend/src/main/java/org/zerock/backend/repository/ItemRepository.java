package org.zerock.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.backend.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
