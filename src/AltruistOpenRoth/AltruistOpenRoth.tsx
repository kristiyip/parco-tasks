import { Modal } from "@mui/material";
import { useMemo, useState } from "react";
import StartCard from "./ModalCards/StartCard";

type AltruistOpenRothType = {
  openAltruistModal: boolean
}
export default function AltruistOpenRoth({
  openAltruistModal
}: AltruistOpenRothType) {
  const [currPage, setCurrPage] = useState(0)

  const viewCard = useMemo(() => {
    switch(currPage) {
      case 0: 
        return <StartCard />
      default:
        return <StartCard />
    }
  }, [currPage])
  return (
    <Modal
      open={openAltruistModal}
      sx={{
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      {viewCard}
    </Modal>
  )
}