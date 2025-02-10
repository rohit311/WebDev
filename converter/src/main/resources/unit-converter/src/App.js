import React, {useEffect, useState} from 'react';
import './index.css';
import {Tabs, Tab} from './widgets/Tabs';
import Converter from './Converter';
import {conversionUnitsMap} from './constants';

function App() {
  const [inputValue, setInputValue] = useState("0");
  const [fromUnit, setFromUnit] = useState("centimeter");
	const [toUnit, setToUnit] = useState("inch");
  const [parameter, setParameter] = useState("length");
  const tabLabelToKey = new Map();
  tabLabelToKey.set("Length", "length");
  tabLabelToKey.set("Temperature", "temperature");
  tabLabelToKey.set("Weight", "weight");

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const onTabChange = (tab) => {
    console.log("changeTab2:", tabLabelToKey.get(tab));
    setParameter(tabLabelToKey.get(tab));
    setFromUnit(conversionUnitsMap[parameter][0]);
    setToUnit(conversionUnitsMap[parameter][1]);
    setInputValue("0");
  };
  return (
    <div className="container">
      <h1>Unit Converter</h1>
      <Tabs onTabChange={onTabChange}>
        {[...tabLabelToKey.keys()].map((tab) =>
            <Tab key={tab} label={tab}>
              <Converter
                key={tab}
                parameter={parameter}
                fromUnit={fromUnit}
                toUnit={toUnit}
                inputValue={inputValue}
                onInputChange={(e) => setInputValue(e)}
                onFromSelectChange={(e) => setFromUnit(e)}
                onToSelectChange={(e) => setToUnit(e)}>
              </Converter>
            </Tab>
          )}
      </Tabs>

    </div>
  );
}

export default App;