import { useContext } from "react";
import { AltruistOpenRothContext, AltruistOpenRothType } from "../AltruistOpenRothContext";
import { Button, Card, TextField } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import '../AltruistOpenRoth.css'

export default function AddressCard() {
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
            We’ll save you some time by pre-filling some information, but we will need a few more pieces of information to be able to set up your account!
          </div>
        </div>
        <div className="inputGrid">
          <TextField
            label="Address"
            placeholder="Regular"
          />
          <TextField
            label="City"
            placeholder="Regular"
          />
          <TextField
            label="State"
            placeholder="Regular"
          />
          <TextField
            label="Zip"
            placeholder="Regular"
          />
        </div>
        <div className="addressButtonContainer">
          <Button
            sx={{
              borderRadius: '6px',
              background: '#344767',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '27px',
              marginTop: '40px',
              padding: '16px 40px'
            }}
            onClick={() => setCurrModalCard((prev: number) => prev + 1)}
          >
            NEXT
          </Button>
        </div>
      </div>
    </Card>
  )
}