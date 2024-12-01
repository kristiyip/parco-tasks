import { useContext } from "react"
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext"
import { Card } from "@mui/material"
import ModalNavigation from "./ModalNavigation"

export default function SolutionOptions() {
  const {
    currModalCard, 
    setCurrModalCard
  } = useContext(RetirementGapContext) as RetirementGapContextType

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap:'24px', 
        padding: '60px 80px' 
      }}
    >
      <div className="modalHeaderText">
        Choose how you'd prefer to bridge your income gap in retirement
      </div>
      <div className="modalSecondaryText">
        You currently have enough saved to afford either option, both provide you with an additional $564/month in retirement 
      </div>
      <ModalNavigation />
    </Card>
  )
}