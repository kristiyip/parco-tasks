import { Button, Card } from "@mui/material";
import { useContext } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import { ArrowBack } from "@mui/icons-material"

export default function ConcernScale() {
  const { 
    currModalCard,
    setCurrModalCard
  } = useContext(RetirementGapContext) as RetirementGapContextType
  const isInflationCard = currModalCard == 3
  return (
    <Card>
      <div>
        <div className="modalHeaderText">
          {`How concerned are you about ${isInflationCard ? 'inflation' : 'being in a nursing home'}?`}
        </div>
        <div className="modalSecondaryText">
          Please answer as honestly as possible for the best results.
        </div>
      </div>
      <div className="modalNavigation">
        <div className="backButton">
          <Button
            sx={{
              color: '#344767',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}
          >
            <ArrowBack />
            Back
          </Button>
        </div>
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
          onClick={() => setCurrModalCard(3)}
        >
          Next
        </Button>
      </div>
    </Card>
  )
}