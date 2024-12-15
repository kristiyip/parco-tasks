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
                    <span style={{fontSize: '16px', textAlign: 'center'}}>
                      Total
                    </span>
                  </> 
                )
              },
              track: {
                children: (
                  <> 
                    <span style={{ marginLeft: '10px'}}>Total</span>
                    <span style={{ marginRight: '10px'}}>Types</span>
                  </>
                )
              }
            }}
            sx={{
              '--Switch-thumbWidth': '85px',
              '--Switch-trackWidth': '180px',
              '--Switch-trackHeight': '31px',
            }}
          />
        </div>
      </div>
      <DailyUsersChart />
    </Card>
  )
}