import { Card, Modal } from "@mui/material";
import { useContext, useMemo } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import ExploreOptions from "./ExploreOptions";
import ConcernScale from "./ConcernScale";
import SolutionOptions from "./SolutionOptions";
import ReallocationOptions from "./ReallocationOptions";
import DatePickerCard from "./DatePickerCard";
import ScheduleMeeting from "./ScheduleMeeting";
import ClearIcon from '@mui/icons-material/Clear';

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
      case 5: 
        return <ReallocationOptions />
      case 6:
        return <DatePickerCard />
      case 7: 
        return <ScheduleMeeting />
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
      <Card
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap:'24px', 
          padding: '60px 80px' 
        }}
      >
        <div className="modalHeader">
          <div 
            className="exitIcon"
            onClick={() => setIsModalOpen(false)}
          >
            <ClearIcon />
          </div>
        </div>
        {viewCard}
      </Card>
    </Modal>
  )
}