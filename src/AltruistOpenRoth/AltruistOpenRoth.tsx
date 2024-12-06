import { Modal } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import StartCard from "./ModalCards/StartCard";
import AddressCard from "./ModalCards/AddressCard";
import { AltruistOpenRothContext, AltruistOpenRothType } from "./AltruistOpenRothContext";

export default function AltruistOpenRoth({
  openAltruistModal
}: any) {
  const { 
    currModalCard, 
    setCurrModalCard
  } = useContext(AltruistOpenRothContext) as AltruistOpenRothType

  const viewCard = useMemo(() => {
    switch(currModalCard) {
      case 0: 
        return <StartCard />
      case 1:
        return <AddressCard />
      default:
        return <StartCard />
    }
  }, [currModalCard])
  
  return (
    <Modal
      open={openAltruistModal}
      sx={{
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      {viewCard}
    </Modal>
  )
}