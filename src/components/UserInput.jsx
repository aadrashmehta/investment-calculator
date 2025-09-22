export default function UserInput({ onChangeInput, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="inital-investement">Initial Investment</label>
          <input type="number" id="inital-investement" onChange={(e) => onChangeInput('initialInvestment', e.target.value)} value={userInput.initialInvestment}  required/>
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" onChange={(e) => onChangeInput('annualInvestment', e.target.value)} value={userInput.annualInvestment}
           required />
        </p>
        </div>
        <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" id="return" onChange={(e) => onChangeInput('expectedReturn', e.target.value)} value={userInput.expectedReturn} required  />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" onChange={(e) => onChangeInput('duration', e.target.value)} value={userInput.duration} required />
        </p>
        </div>
    </section>
  );
}