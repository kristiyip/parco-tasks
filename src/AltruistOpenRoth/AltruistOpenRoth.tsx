import { Modal } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import StartCard from "./ModalCards/StartCard";
import AddressCard from "./ModalCards/AddressCard";
import { AltruistOpenRothContext, AltruistOpenRothType } from "./AltruistOpenRothContext";
import SSNCard from "./ModalCards/SSNCard";
import CompletionCard from "./ModalCards/CompletionCard";

export default function AltruistOpenRoth() {
  const { 
    currModalCard, 
    modalOpen,
    setModalOpen
  } = useContext(AltruistOpenRothContext) as AltruistOpenRothType

  const viewCard = useMemo(() => {
    switch(currModalCard) {
      case 0: 
        return <StartCard />
      case 1:
        return <AddressCard />
      case 2:
        return <SSNCard />
      case 3:
        return <CompletionCard />
      default:
        return <StartCard />
    }
  }, [currModalCard])

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      sx={{
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      {viewCard}
    </Modal>
  )
}