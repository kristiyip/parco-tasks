import { Box, Card } from "@mui/material";
import { ArrowForward } from "@mui/icons-material"
import { useContext } from "react";
import { RetirementGapContext, RetirementGapContextType } from "../RetirementGapContext";

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
          <div>My Retirement Gap:</div>
          <ArrowForward />
          <div>My Retirement Gap:</div>
        </Box>
      </Box>
    </Card>
  )
}