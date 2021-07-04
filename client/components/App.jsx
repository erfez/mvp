import React, { useState } from 'react';
import Synth from './Synth.jsx';
import './App.css';
import * as Tone from "tone";

function App() {

  const synth = new Tone.MembraneSynth().toMaster()

  const playSynth = () => {
    synth.triggerAttackRelease("C2", "8n")
  }
    return (
      <div id="wrapper">
        <h1>SYNTH</h1>
        <button id="button" onClick={playSynth}>play synth note</button>
        <Synth />
      </div>
    );
}

export default App;