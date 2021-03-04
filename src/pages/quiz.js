import React, { useState } from 'react';
import Options from '../components/options'
import Result from '../components/result'

export default function Home() {
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const increasePoints = () => {
    setTotalPoints(totalPoints+1)
  }

  const increaseCurrentStep = () => {
    setCurrentStep(currentStep+1)
  }

  return (
    <div id="root">
      <div id="main">

      { currentStep === 11 
        ? <Result totalPoints={totalPoints}/>
        : <Options step={currentStep} increaseStep={increaseCurrentStep} increasePoints={increasePoints}/>}
      </div>
      <footer>
        Feito com &hearts; por <a href="https://github.com/brunapereira">Bruna Pereira</a>
      </footer>
    </div>
  )
}
