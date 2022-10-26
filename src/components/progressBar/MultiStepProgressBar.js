import React, { useState } from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Link } from "react-router-dom";

const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;
  const [step,setStep] = useState(1)

  if (step === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <Link to="/user/boxes" onClick={()=>setStep(1)}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </Link>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <Link to="/user/products" onClick={()=>setStep(2)}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </Link>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <Link to="/user/cart" onClick={()=>setStep(3)}
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </Link>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
