import { useContext } from "react";
import { AltruistOpenRothContext, AltruistOpenRothType } from "../AltruistOpenRothContext";
import { Button, Card, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';
import '../AltruistOpenRoth.css';

export default function SSNCard() {
  const { 
    setCurrModalCard,
    setModalOpen
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
            Start Saving: Open A Roth IRA
          </div>
          <div className="contentDetailText">
            We hate to ask for your social, but we are legally required to collect it for a Roth IRA. Rest assured that your information is secure thanks to our encryption.
          </div>
        </div>
        <TextField
          label="Social Security Number"
          placeholder="Regular"
        />
        <TextField
          label="Confirm Social Security Number"
          placeholder="Regular"
        />
        <div className="modalNavigation">
          <div className="backButton">
            <Button
              sx={{
                color: '#344767',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}
              onClick={() => setCurrModalCard((prev: number) => prev - 1)}
            >
              <ArrowBack />
              Back
            </Button>
          </div>
          <Button
            sx={{
              borderRadius: '6px',
              background: '#60BE64',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '27px',
              padding: '16px 20px',
            }}
            onClick={() => setCurrModalCard((prev: number) => prev + 1)}
          >
            COMPLETE
          </Button>
        </div>
      </div>
    </Card>
  )
}
