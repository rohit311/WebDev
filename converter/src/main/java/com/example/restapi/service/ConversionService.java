package com.example.restapi.service;

import com.example.restapi.model.Length;
import com.example.restapi.model.Temperature;
import com.example.restapi.model.Weight;

public class ConversionService {

  public double convert(String type, String fromUnit, String toUnit, double value) {
    if (type.equalsIgnoreCase("length")) {
      return new Length(fromUnit, value).getValue(toUnit);
    }
    else if (type.equalsIgnoreCase("weight")) {
      return new Weight(fromUnit, value).getValue(toUnit);
    }
    else if (type.equalsIgnoreCase("temperature")) {
      return new Temperature(fromUnit, value).getValue(toUnit);
    }


    return 0.0;
  }
}
