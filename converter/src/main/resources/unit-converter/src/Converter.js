import React, {useState} from 'react';
import {conversionUnitsMap} from './constants';
import './index.css';

const Converter = (props) => {
  const {parameter, fromUnit, toUnit, inputValue, onInputChange, onFromSelectChange, onToSelectChange} = props;
  const [result, setResult] = useState(0);
  const getConvertedResult = () => {
    const requestMap = {};
    requestMap.type = parameter;
    requestMap.fromUnit = fromUnit;
    requestMap.toUnit = toUnit;
    requestMap.value = inputValue;

    fetch('http://localhost:8080/convert', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestMap)
    })
      .then(response => response.text())
      .then(data => setResult(data))
      .catch(error => console.error('Error fetching users:', error));
  };


  return (
    <>
      <input
      key={parameter}
      type="number"
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Enter value"
      className="input-field" />
        <select
        className="unit-selectors"
        value={fromUnit}
        onChange={(e) => onFromSelectChange(e.target.value)}
        >
          {conversionUnitsMap[parameter].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
      </select>
      <select
        className="unit-selectors"
        value={toUnit}
        onChange={(e) => onToSelectChange(e.target.value)}
      >
        {conversionUnitsMap[parameter].map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p id="result">{result}</p>
      <button onClick={getConvertedResult} className="convert-button">
        Convert
      </button>
    </>
  );
};

export default Converter;