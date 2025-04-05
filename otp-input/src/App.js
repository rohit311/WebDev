import { useEffect, useRef, useState } from "react";
import "./styles.css";

const OTP_DIGITS_COUNT = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArray = [...inputArr];
    newArray[index] = newValue.slice(-1);

    setInputArr(newArray);

    if (index < OTP_DIGITS_COUNT) {
      newValue && refArr.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (event, index) => {
    if (!event.target.value && event.key === "Backspace") {
      refArr.current[index - 1].focus();
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            type="text"
            className="otp-input"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
