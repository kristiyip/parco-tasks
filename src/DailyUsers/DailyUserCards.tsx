import { Card } from "@mui/material";
import { Switch } from "@mui/joy";
import './DailyUsers.css'
import DailyUsersChart from "./DailyUsersChart";

export default function DailyUserCard() {
  return (
    <Card
      sx={{
        padding: '24px',
        maxWidth: '560px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      <div className="dailyUserCardHeader">
        <div>Daily PARCO Users</div>
        <div>
          <Switch
            slotProps={{
              thumb: {
                children: (
                  <>
                    <span>Total</span>
                  </> 
                )
              },
              track: {
                children: (
                  <> 
                    <span>Types</span>
                  </>
                )
              }
            }}
            sx={{
              '--Switch-thumbWidth': '90px',
              // '--Switch-thumbHeight': '31px',
              '--Switch-trackWidth': '100px',
              '--Switch-trackHeight': '31px',
            }}
          />
        </div>
      </div>
      <DailyUsersChart />
    </Card>
  )
}