package com.example.restapi.model;

public class Temperature {
  private final double valueInCelsius;

  public Temperature(String unit, double value) {
      this.valueInCelsius = toCelsius(unit, value);
  }

  public double getValue(String unit) {
      return celsiusTo(unit, valueInCelsius);
  }

  private double toCelsius(String fromUnit, double value) {
      switch (fromUnit.toLowerCase()) {
          case "celsius":
              return value;
          case "fahrenheit":
              return (value - 32) * 5 / 9;
          case "kelvin":
              return value - 273.15;
          default:
              return 0.0;
      }
  }

  private double celsiusTo(String toUnit, double value) {
      switch (toUnit.toLowerCase()) {
          case "celsius":
              return value;
          case "fahrenheit":
              return (value * 9 / 5) + 32;
          case "kelvin":
              return value + 273.15;
          default:
              return 0.0;
      }
  }
}
