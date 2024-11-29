import { Card, Modal } from "@mui/material";
import { useContext, useMemo } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import ExploreOptions from "./ExploreOptions";
import ConcernScale from "./ConcernScale";

type RetirementModalType = {
  isModalOpen: boolean,
  setIsModalOpen: Function
}

export default function RetirementGapModal({
  isModalOpen,
  setIsModalOpen
}: RetirementModalType) {

  const { 
    currModalCard,
    setCurrModalCard
  } = useContext(RetirementGapContext) as RetirementGapContextType

  const viewCard = useMemo(() => {
    switch(currModalCard) {
      case 1:
        return <ExploreOptions />
      case 2: 
        return <ConcernScale />
      case 3: 
        return <ConcernScale />
      default:
        return <ExploreOptions />
    }
  }, [currModalCard])

  return (
    <Modal
      open={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setCurrModalCard(1)
      }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '20rem 0rem'
      }}
    >
      {viewCard}
    </Modal>
  )
}