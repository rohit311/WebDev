package com.rohit.SpringAI;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ollama")
@CrossOrigin("*")
public class OllamaController {

  private ChatClient chatClient;

  public OllamaController(OllamaChatModel chatModel) {
    this.chatClient =  ChatClient.create(chatModel);
  }

  @GetMapping("/{message}")
  public ResponseEntity<String> getAnswer(@PathVariable String message) {

    ChatResponse chatResponse = chatClient
                  .prompt(message)
                  .call()
                  .chatResponse();

    String response = chatResponse.getResult().getOutput().getText();

    return ResponseEntity.ok(response);
  }
}
