import React, { useContext, useState } from 'react';
import RetirementGap from './RetirementGap/RetirementGapCard';
import './App.css';
import AltruistOpenRoth from './AltruistOpenRoth/AltruistOpenRoth';
import { AltruistOpenRothContext, AltruistOpenRothType } from './AltruistOpenRoth/AltruistOpenRothContext';

function App() {
  const {setModalOpen} = useContext(AltruistOpenRothContext) as AltruistOpenRothType
  const [openAltruistModal, setOpenAltruistModal] = useState(false)

  return (
    <div className="App">
      <RetirementGap />
      <div>
        <button onClick={() => setModalOpen(true)}>Open Altruist Flow</button>
      </div>
      <AltruistOpenRoth />
    </div>
  );
}

export default App;
