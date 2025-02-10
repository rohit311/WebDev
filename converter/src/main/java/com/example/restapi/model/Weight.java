package com.example.restapi.model;

import java.util.HashMap;
import java.util.Map;

public class Weight {
  private final double valueInGram;
  private static final Map<String, Double> conversionToGrams = new HashMap<>() {{
      put("milligram", 0.001);
      put("gram", 1.0);
      put("kilogram", 1000.0);
      put("ounce", 28.3495);
      put("pound", 453.592);
  }};

  public Weight(String unit, double value) {
      this.valueInGram = toGram(unit, value);
  }

  public double getValue(String unit) {
      return gramTo(unit, this.valueInGram);
  }

  private double toGram(String unit, double value) {
      return value * conversionToGrams.get(unit);
  }

  private double gramTo(String unit, double value) {
      return value / conversionToGrams.get(unit.toLowerCase());
  }
}
