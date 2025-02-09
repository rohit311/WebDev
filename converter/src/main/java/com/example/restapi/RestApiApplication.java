package com.example.restapi;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapi.service.ConversionService;

@RestController
@SpringBootApplication
public class RestApiApplication {

  private final ConversionService conversionService;

  public RestApiApplication() {
    this.conversionService = new ConversionService();
  }

  @GetMapping("/")
  public ResponseEntity<Object> getAvailableUnits() {
    Map<String, Map<String, Double>> parameterToUnits = new HashMap<>();
    List<String> lengthParams = new ArrayList<>();
    lengthParams.add("cm");
    lengthParams.add("mt");

    parameterToUnits.put("length", null);
    return ResponseEntity.created(null).body(parameterToUnits);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/convert")
  public ResponseEntity<String> converUnits(@RequestBody Map<String, String> payload, BindingResult bindingResult) {

    String type = payload.get("type");
    String fromUnit = payload.get("fromUnit");
    String toUnit = payload.get("toUnit");
    double value = Double.parseDouble(payload.get("value"));
    double resultValue;

    try {
      System.out.println(payload);
      resultValue = conversionService.convert(type, fromUnit, toUnit, value);


    } catch(Exception ex) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad request");
    }

    return ResponseEntity.created(null).body(Double.toString(resultValue));

  }

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

}
