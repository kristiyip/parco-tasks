import { Card, Modal } from "@mui/material";
import { useContext, useMemo } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import ExploreOptions from "./ExploreOptions";
import ConcernScale from "./ConcernScale";
import SolutionOptions from "./SolutionOptions";

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
      case 4: 
        return <SolutionOptions />
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
        display: 'block',
        alignContent: 'center',
        padding: '0rem 20rem'
      }}
    >
      {viewCard}
    </Modal>
  )
}