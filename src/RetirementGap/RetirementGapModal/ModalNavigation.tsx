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
      {currModalCard !== 4 && currModalCard !== 5 && currModalCard !== 6 && currModalCard !== 7 && (
        <Button
          sx={{
            background: "#344767",
            color: 'white',
            padding: '.5rem 2rem',
            fontSize: '1.125rem',
            fontWeight: '600',
          }}
          onClick={() => setCurrModalCard((prev: number) => prev + 1)}
        >
          Next
        </Button>
      )}
      {currModalCard === 6 && (
        <Button
          sx={{
            background: "#344767",
            color: 'white',
            height: '3.3rem',
            padding: '.5rem 2rem',
            fontSize: '1.125rem',
            fontWeight: '600',
          }}
          onClick={() => setCurrModalCard((prev: number) => prev + 1)}
        >
          SELECT A TIME
        </Button>
      )}
      {currModalCard === 7 && (
        <Button
          sx={{
            background: "#344767",
            color: 'white',
            height: '3.3rem',
            padding: '.5rem 2rem',
            gap: '0.625rem',
            fontSize: '1.125rem',
            fontWeight: '600',
          }}
        >
          SCHEDULE A MEETING
        </Button>
      )}
    </div>
  )
}