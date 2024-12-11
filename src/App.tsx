import React, { useContext, useState } from 'react';
import RetirementGap from './RetirementGap/RetirementGapCard';
import './App.css';
import AltruistOpenRoth from './AltruistOpenRoth/AltruistOpenRoth';
import { AltruistOpenRothContext, AltruistOpenRothType } from './AltruistOpenRoth/AltruistOpenRothContext';
import DailyUsers from './DailyUsers/DailyUsers';

function App() {
  const {setModalOpen} = useContext(AltruistOpenRothContext) as AltruistOpenRothType
  const [openDailyUsersModal, setOpenDailyUsersModal] = useState(false)

  return (
    <div className="App">
      <RetirementGap />
      <div>
        <button onClick={() => setModalOpen(true)}>Open Altruist Flow</button>
      </div>
      <div>
        <button onClick={() => setOpenDailyUsersModal(true)}>
          Open Daily Users
        </button>
      </div>
      <AltruistOpenRoth />
      <DailyUsers 
        openDailyUsersModal={openDailyUsersModal}
        setOpenDailyUsersModal={setOpenDailyUsersModal}
      />
    </div>
  );
}

export default App;
