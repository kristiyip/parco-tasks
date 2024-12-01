import { Box, Button, Card } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material"
import { useContext } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import MonthlyGap from "../MonthlyGap";
import ModalNavigation from "./ModalNavigation";

export default function ExploreOptions() {
  const { 
    monthlyIncomeGap,
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
      <Box>
        <div className="modalHeaderText">
          Let's explore some options for bridging you Retirement Gap! 
        </div>
        <div className="modalSecondaryText">
          We'll start off with a few questions to get a sense of the direction you'd like to pursue. 
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }} 
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#FD5C70',
              padding: '16px 24px',
              color: 'white',
              borderRadius: '0.5rem',
              width: '377px'
            }}
          >
            <MonthlyGap monthlyIncomeGap={monthlyIncomeGap} />
          </Box>
          <ArrowForward className="arrowForward" />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#60BE64',
              padding: '16px 24px',
              color: 'white',
              borderRadius: '0.5rem',
              width: '377px'
            }}
          >
            <MonthlyGap monthlyIncomeGap={0} />
          </Box>
        </Box>
      </Box>
      <ModalNavigation />
    </Card>
  )
}