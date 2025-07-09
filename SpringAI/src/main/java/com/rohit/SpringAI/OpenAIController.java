package com.rohit.SpringAI;

import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/openai")
@CrossOrigin("*")
public class OpenAIController {

  private OpenAiChatModel chatModel;

  public OpenAIController(OpenAiChatModel chatModel) {
    this.chatModel = chatModel;
  }

  @GetMapping("/{message}")
  public ResponseEntity<String> getAnswer(@PathVariable String message) {

    String response = chatModel.call(message);

    return ResponseEntity.ok(response);
  }
}
