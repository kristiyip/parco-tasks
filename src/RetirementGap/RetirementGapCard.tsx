import { Button, Card, CardContent } from "@mui/material";
import '../App.css';
import { useContext, useState } from "react";
import { RetirementGapContext, RetirementGapContextType } from "./RetirementGapContext";
import RetirementGapModal from "./RetirementGapModal/RetirementGapModal";
import MonthlyGap from "./MonthlyGap";

export default function RetirementGap() {
  const {
    monthlyIncomeGap,
  } = useContext(RetirementGapContext) as RetirementGapContextType

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="cardContainer">
      <Card>
        <div className="cardHeader">
          <MonthlyGap monthlyIncomeGap={monthlyIncomeGap} />
        </div>
        <CardContent>
          <div>Bridge Your Income Gap in Retirement!</div>
          <div>{`To bridge your $${monthlyIncomeGap}/month income gap in retirement, we estimate you’d need to use:`}</div>
          <div className="optionsContainer">
            <Button 
              sx={{ 
                background: '#344767', 
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}
              onClick={() => setIsModalOpen(true)}
            >
              EXPLORE MY OPTIONS
            </Button>
            <Button 
              sx={{ 
                background: '#344767', 
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}
            >
              SCHEDULE A CALL
            </Button>
          </div>
        </CardContent>
      </Card>
      <RetirementGapModal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  )
}