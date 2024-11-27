import { Card, CardContent } from "@mui/material";
import '../App.css';

export default function RetirementGap() {
  return (
    <div className="cardContainer">
      <Card sx={{ width: '500px'}}>
        <div className="cardHeader">
          <div>My Retirement Gap:</div>
          <div>/month</div>
        </div>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}