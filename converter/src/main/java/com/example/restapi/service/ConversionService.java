package com.example.restapi.service;

import com.example.restapi.model.Length;

public class ConversionService {

  public double convert(String type, String fromUnit, String toUnit, double value) {
    if (type.equalsIgnoreCase("length")) {
      return new Length(fromUnit, value).getValue(toUnit);
    }

    return 0.0;
  }
}
