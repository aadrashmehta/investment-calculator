import { useState } from "react";
import { createFormatter } from "./util/investment.js"

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

const INITIAL_VALUES = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState({...INITIAL_VALUES});

  const [currency, setCurrency] = useState();

  let formatter = createFormatter(currency);

  // const inputIsValid = (Object.values(userInput).every((value) => value >= 0) && userInput.duration > 0);
  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue
    }))
  }

  return (
    <>
      <Header />
      <div className="input-group currency-wrapper">
        <p>
          <label htmlFor="currency-selector">Currency</label>
          <select id="currency-selector" onChange={(e) => setCurrency(e.target.value)} value={currency}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
          </select>
        </p>
      </div>
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} formatter={formatter} />}
    </>
  )
}

export default App
