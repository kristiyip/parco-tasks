import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card } from '@mui/material';
import { useContext } from 'react';
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext"
import ModalNavigation from './ModalNavigation';

export default function ReallocationOptions() {
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
      Which option below interests you most?
    </div>
    <div className="modalSecondaryText">
      One has a Cost Of Living Adjustment (COLA) meaning that each year for the rest of your life, the amount of income received will increase by 5%. This is a good choice for resisting inflation.
    </div>
    <div className="optionContainer">
      <div className="optionInfo">
        <div className="optionHeader">
          $110k For $564/month With NO COLA
        </div>
        <div className="optionDetails">
          Close your income gap and receive $564 a month in retirement, for the rest of your life.
        </div>
        <div>
          <div className="optionBottomText">
            Lifetime income guaranteed by North American
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon className="optionArrowIcon"/>
    </div>
    <div 
      className="optionContainer"
      onClick={() => setCurrModalCard((prev: number) => prev + 1)}
    >
      <div className="optionInfo">
        <div className="optionHeader">
          $140k For $564/month With A 5% COLA
        </div>
        <div className="optionDetails">
          Close your income gap and receive $564 a month in retirement, for the rest of your life, increasing by 5% every year. 
        </div>
        <div>
          <div className="optionBottomText">
            Lifetime income guaranteed by Allianz
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon className="optionArrowIcon"/>
    </div>
    <ModalNavigation />
  </Card>
  )
}