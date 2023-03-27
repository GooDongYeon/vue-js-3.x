package org.zerock.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.zerock.backend.entity.Member;
import org.zerock.backend.repository.MemberRepository;

import java.util.Map;

public class AccountController {
  @Autowired
  MemberRepository memberRepository;

  @PostMapping("/api/account/login")
  public int login(@RequestBody Map<String, String> params) {
    Member member = memberRepository.findByEmailAndPassword(params.get("email"), params.get("password"));

    if (member != null) {
      return member.getId();
    }
    return 0;
  }
}
