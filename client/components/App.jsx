import React, { useState, useEffect } from 'react';
import Synth from './Synth.jsx';
import './App.css';
import Sliders from './Sliders.jsx';
import * as Tone from "tone";

function App() {

  const [synthType, setSynthType] = useState('sine')
  const [synthTypeTwo, setSynthTypeTwo] = useState('sine')
  const [synthOneVolume, setSynthOneVolume] = useState(-60)


    const synthOne = new Tone.Synth( {
      oscillator : {
        type : synthType,
        volume: synthOneVolume
      }
    }).toMaster()

  const synthTwo = new Tone.Synth( {
    oscillator : {
      type : synthTypeTwo
    }
  }).toMaster()

  const playSynthOne = () => {
    synthOne.triggerAttackRelease("C2", "1n")
  }
  const playSynthTwo = () => {
    synthTwo.triggerAttackRelease("C3", "1n")
  }

  const changeToFatSawtooth = () => {
    setSynthType("fatsawtooth")
  }
  const changeToSine = () => {
    setSynthType("sine")
  }
    return (
      <div id="wrapper">
        <h1>SYNTH</h1>
        <button id="button" onClick={playSynthOne}>Play Synth 1</button>
        <button id="button" onClick={playSynthTwo}>Play Synth 2</button>
        <button id="button" onClick={changeToFatSawtooth}>Fat Sawtooth</button>
        <button id="button" onClick={changeToSine}>Sine</button>
        <Synth />
        <Sliders synthOneVolume={synthOneVolume} setSynthOneVolume={setSynthOneVolume}/>
      </div>
    );
}

export default App;