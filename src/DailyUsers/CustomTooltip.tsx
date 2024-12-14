import { Tooltip } from "@mui/material";

export default function CustomTooltip() {
  return (
    <Tooltip
      title="custom tooltip"
      open={true}
    >
      <div style={{
        position: 'absolute',
        top:"35%"
      }}>
        Show tooltip
      </div>
    </Tooltip>
  )
}