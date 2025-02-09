import React, {useEffect, useState} from 'react';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState("0");
  const [fromUnit, setFromUnit] = useState("centimeter");
	const [toUnit, setToUnit] = useState("inch");
  const [result, setResult] = useState(0);

  const conversionUnitsMap = {
    length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"]
  };

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const convert = () => {
    const requestMap = new Object();
    requestMap.type = "length";
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
    <div className="container">
      <h1>Unit Converter</h1>
      <input
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Enter value"
				className="input-field"
			/>
      <select
				className="unit-selectors"
				value={fromUnit}
				onChange={(e) => setFromUnit(e.target.value)}
			>
				{conversionUnitsMap["length"].map((value, index) => (
					<option key={index} value={value}>
						{value}
					</option>
				))}
			</select>
			<select
				className="unit-selectors"
				value={toUnit}
				onChange={(e) => setToUnit(e.target.value)}
			>
				{conversionUnitsMap["length"].map((value, index) => (
					<option key={index} value={value}>
						{value}
					</option>
				))}
			</select>
			<p id="result">{result}</p>
			<button onClick={convert} className="convert-button">
				Convert
			</button>
    </div>
  );
}

export default App;