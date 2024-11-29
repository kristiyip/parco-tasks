import { Box, Button, Card } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material"
import { useContext } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";
import MonthlyGap from "../MonthlyGap";

export default function ExploreOptions() {
  const { monthlyIncomeGap } = useContext(RetirementGapContext) as RetirementGapContextType
  return (
    <Card
      sx={{
        padding: '3.75rem 5rem'
      }}
    >
      <Box>
        <div className="exploreOptionsHeaderText">
          Let's explore some options for bridging you Retirement Gap! 
        </div>
        <div className="exploreOptionsSecondaryText">
          We'll start off with a few questions to get a sense of the direction you'd like to pursue. 
        </div>
        <Box
          sx={{
            display: 'flex'
          }} 
        >
          <Box
            sx={{
              display: 'flex',
              background: '#FD5C70',
              padding: '1rem 1.5rem',
              color: 'white',
              borderRadius: '0.5rem'
            }}
          >
            <MonthlyGap monthlyIncomeGap={monthlyIncomeGap} />
          </Box>
          <ArrowForward className="arrowForward" />
          <Box
            sx={{
              display: 'flex',
              background: '#60BE64',
              padding: '1rem 1.5rem',
              color: 'white',
              borderRadius: '0.5rem'
            }}
          >
            <MonthlyGap monthlyIncomeGap={0} />
          </Box>
        </Box>
      </Box>
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
        >
          Next
        </Button>
      </div>
    </Card>
  )
}