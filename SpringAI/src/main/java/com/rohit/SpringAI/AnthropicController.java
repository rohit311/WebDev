package com.rohit.SpringAI;

import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/anthropic")
@CrossOrigin("*")
public class AnthropicController {

  private ChatClient chatClient;

  public AnthropicController(AnthropicChatModel chatModel) {
    this.chatClient =  ChatClient.create(chatModel);
  }

  @GetMapping("/{message}")
  public ResponseEntity<String> getAnswer(@PathVariable String message) {

    String response = chatClient.prompt(message).call().content();

    return ResponseEntity.ok(response);
  }
}
