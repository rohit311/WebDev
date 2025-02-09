package com.example.restapi.model;

import java.util.HashMap;
import java.util.Map;

public class Length {

  private final double valueInMeter;
  private static final Map<String, Double> conversionToMeters = new HashMap<>() {{
    put("millimeter", 0.001);
    put("centimeter", 0.01);
    put("meter", 1.0);
    put("kilometer", 1000.0);
    put("inch", 0.0254);
    put("foot", 0.3048);
    put("yard", 0.9144);
    put("mile", 1609.34);
  }};

  public Length(String unit, double value) {
      this.valueInMeter = toMeter(unit.toLowerCase(), value);
  }

  public double getValue(String unit) {
      return meterTo(unit.toLowerCase(), this.valueInMeter);
  }

  private double toMeter(String unit, double value) {
      return value * conversionToMeters.get(unit.toLowerCase());
  }

  private double meterTo(String unit, double value) {
      return value / conversionToMeters.get(unit.toLowerCase());
  }
}
