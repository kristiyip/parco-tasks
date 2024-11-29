import { Card, Modal } from "@mui/material";
import { useContext, useMemo } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import ExploreOptions from "./ExploreOptions";

type RetirementModalType = {
  isModalOpen: boolean,
  setIsModalOpen: Function
}

export default function RetirementGapModal({
  isModalOpen,
  setIsModalOpen
}: RetirementModalType) {

  const { currModalCard } = useContext(RetirementGapContext) as RetirementGapContextType

  const viewCard = useMemo(() => {
    switch(currModalCard) {
      case 1:
        return <ExploreOptions />
        break;
      default:
        return <ExploreOptions />
    }
  }, [currModalCard])

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
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