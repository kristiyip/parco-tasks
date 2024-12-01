import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material"
import { useContext } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";

export default function ModalNavigation() {
  const { 
    currModalCard,
    setCurrModalCard 
  } = useContext(RetirementGapContext) as RetirementGapContextType
  
  return (
    <div className="modalNavigation">
      <div className="backButton">
        <Button
          sx={{
            color: '#344767',
            fontSize: '1.125rem',
            fontWeight: '600'
          }}
          onClick={() => setCurrModalCard((prev: number) => prev - 1)}
        >
          <ArrowBack />
          Back
        </Button>
      </div>
      {currModalCard !== 4 && currModalCard !== 5 && (
        <Button
          sx={{
            background: "#344767",
            color: 'white',
            width: '6.79rem',
            height: '3.3rem',
            gap: '0.625rem',
            fontSize: '1.125rem',
            fontWeight: '600',
          }}
          onClick={() => setCurrModalCard((prev: number) => prev + 1)}
        >
          Next
        </Button>
      )}
    </div>
  )
}