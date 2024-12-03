import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react';
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext"
import ModalNavigation from './ModalNavigation';
import NorthAmericanLogo from '../logos/NorthAmericanLogo';
import ParcoLogo from '../logos/ParcoLogo';

export default function ReallocationOptions() {
  const { setCurrModalCard } = useContext(RetirementGapContext) as RetirementGapContextType
  return (
    <>
      <div className="modalHeaderText">
        Which option below interests you most?
      </div>
      <div className="modalSecondaryText">
        One has a Cost Of Living Adjustment (COLA) meaning that each year for the rest of your life, the amount of income received will increase by 5%. This is a good choice for resisting inflation.
      </div>
      <div className="optionContainer">
        <div style={{ marginRight: '24px'}}>
          <NorthAmericanLogo />
        </div>
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
        <div style={{ marginRight: '24px'}}>
          <ParcoLogo />
        </div>
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
    </>
  )
}