import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleVisibility() {
    setShow(!show);
  }

  return (
    <>
      <main>
        <button className="cancel" onClick={handleVisibility}>
          &times;
        </button>

        <div className={`container ${show ? "" : "opacity"}`}>
          <div className="top">
            <div className="step active">1</div>
            <div className="line"></div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
            <div className="line"></div>
            <div className={`step ${step === 3 ? "active" : ""}`}>3</div>

            {/* <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <div className="line"></div>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
          <div className="line"></div>
          <div className={`step ${step === 3 ? "active" : ""}`}>3</div> */}
          </div>

          {/* <div className="middle">Step {step}: Learn React ⚡️</div> */}
          <div className="middle">
            Step {step}: {messages[step - 1]}
          </div>

          <div className="bottom">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
