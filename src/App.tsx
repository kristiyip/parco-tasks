import React, { useState } from 'react';
import RetirementGap from './RetirementGap/RetirementGapCard';
import './App.css';
import AltruistOpenRoth from './AltruistOpenRoth/AltruistOpenRoth';

function App() {
  const [openAltruistModal, setOpenAltruistModal] = useState(false)

  return (
    <div className="App">
      <RetirementGap />
      <div>
        <button onClick={() => setOpenAltruistModal(true)}>Open Altruist Flow</button>
      </div>
      <AltruistOpenRoth openAltruistModal={openAltruistModal} />
    </div>
  );
}

export default App;
