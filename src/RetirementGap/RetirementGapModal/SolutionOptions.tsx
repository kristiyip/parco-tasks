import { useContext } from "react"
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext"
import { Card } from "@mui/material"
import ModalNavigation from "./ModalNavigation"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SolutionOptions() {
  const { setCurrModalCard } = useContext(RetirementGapContext) as RetirementGapContextType
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
      <div className="optionContainer">
        <div className="optionInfo">
          <div className="optionHeader">
            Use $300,000 Of Your TSP
          </div>
          <div className="optionDetails">
            Based on the assumption that you will be spending 3% of your TSP each year in retirement to close your income gap.
          </div>
          <div>
            <div className="optionBottomText">Withdrawals estimated to last 30 years</div>
          </div>
        </div>
        <ArrowForwardIosIcon className="optionArrowIcon"/>
      </div>
      <div 
        className="optionContainer"
        onClick={() => setCurrModalCard((prev: number) => prev + 1)}
      >
        <div className="optionInfo">
          <div style={{ display: 'flex' }}>
            <div className="optionHeader">
              Re-Allocate $110k-$140k with PARCO
            </div>
            <div className="recommendedBadge">
              RECOMMENDED
            </div>
          </div>
          <div className="optionDetails">
            Close your income gap and receive $564 a month in retirement for the rest of your life.
          </div>
          <div>
            <div className="optionBottomText">Lifetime income guaranteed</div>
          </div>
        </div>
        <ArrowForwardIosIcon className="optionArrowIcon"/>
      </div>
      <ModalNavigation />
    </Card>
  )
}
