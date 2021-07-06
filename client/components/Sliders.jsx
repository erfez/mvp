import React from 'react';

const Sliders = ( {synthOneVolume, setSynthOneVolume}) => {

  // const volumeChanger = () => {
  //   setSynthOneVolume()
  // }

  return (
  <div>
    <input
      type="range"
      min="-30"
      max="0"
      value={synthOneVolume}
      className="volume--left"
      onChange={e => setSynthOneVolume(e.target.value)}
    />
  </div>
  )
};

export default Sliders;