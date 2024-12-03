import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import ModalNavigation from "./ModalNavigation";

export default function ConcernScale() {
  const { 
    currModalCard,
    setInflationConcernRating,
    setNursingHomeConcernRating
  } = useContext(RetirementGapContext) as RetirementGapContextType

  const [selectedConcern, setSelectedConcern] = useState<number | null>(null)
  const isInflationCard = currModalCard == 3

  useEffect(() => {
    setSelectedConcern(null)
  }, [currModalCard])

  const handleSelect = (rating: number) => {
    setSelectedConcern(rating)
    if(currModalCard == 2) {
      setNursingHomeConcernRating(rating)
    } else if(currModalCard == 3) {
      setInflationConcernRating(rating)
    }
  }

  return (
    <>
      <div className="modalHeaderText">
        {`How concerned are you about ${isInflationCard ? 'inflation' : 'being in a nursing home'}?`}
      </div>
      <div className="modalSecondaryText">
        Please answer as honestly as possible for the best results.
      </div>
      <div className="concernedButtonGroup">
        <Button 
          onClick={() => handleSelect(0)}
          sx={{
            backgroundColor: selectedConcern === 0 ? '#0671AD' : '#F1F1F1',
            color: selectedConcern === 0 ? 'white' : '#262627',
          }}
        >
          Not Concerned
        </Button>
        <Button 
          onClick={() => handleSelect(1)}
          sx={{
            backgroundColor: selectedConcern === 1 ? '#0671AD' : '#F1F1F1',
            color: selectedConcern === 1 ? 'white' : '#262627',
          }}
        >
          Hadn't Thought About It
        </Button>
        <Button 
          onClick={() => handleSelect(2)}
          sx={{
            backgroundColor: selectedConcern === 2 ? '#0671AD' : '#F1F1F1',
            color: selectedConcern === 2 ? 'white' : '#262627',
          }}
        >
          Concerned
        </Button>
      </div>
      <ModalNavigation />
    </>
  )
}
