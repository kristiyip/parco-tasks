import { useContext } from "react";
import { AltruistOpenRothContext, AltruistOpenRothType } from "../AltruistOpenRothContext";
import { Button, Card } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import '../AltruistOpenRoth.css';

export default function CompletionCard() {
  const { 
    setModalOpen,
    setCurrModalCard
  } = useContext(AltruistOpenRothContext) as AltruistOpenRothType

  const handleClose = () => {
    setModalOpen(false)
    setCurrModalCard(0)
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '700px',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div 
        className="cancelIconContainer"
        onClick={() => handleClose()}
      >
        <CancelIcon 
          className="cancelIcon" 
          fontSize="large"
        />
      </div>
      <div className="banner"/>
      <div className="cardContentContainer">
        <div>
          <div className="contentHeader">
            Your Account Creation Is Processing!
          </div>
          <div className="contentDetailText">
            Expect an email or an alert on your PARCO dashboard with details about your Roth IRA account.
          </div>
        </div>
        <Button
          sx={{
            borderRadius: '6px',
            background: '#60BE64',
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '27px',
            marginTop: '40px',
            padding: '16px 40px'
          }}
          onClick={() => handleClose()}
        >
          CLOSE
        </Button>
      </div>
    </Card>
  )
}

