import React from 'react'
import * as logic from '../logic/quiz'

export default function Options(props) {
  const options = logic.options
  const currentOption = options[props.step - 1]

const selectOption = (e) => {
    const selected = e.target.value

    if (currentOption.type === selected)
      props.increasePoints()

    props.increaseStep()
  }

  return (
    <>
      <div className="currentStep">
        {props.step} / 10
      </div>

      <div className="imageOptions">
        <img src={currentOption.path} alt="currentOption"/>
      </div>

      <div className="buttonOptions">
        <button className="startButton" onClick={selectOption} value="aclimacao">Aclimação</button>
        <button className="startButton" onClick={selectOption} value="central-park">Central Park</button>
      </div>
    </>
  )
}
