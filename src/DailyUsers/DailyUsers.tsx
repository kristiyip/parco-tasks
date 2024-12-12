import { Modal } from "@mui/material";
import DailyUserCard from "./DailyUserCards";

type DailyUserType = {
  openDailyUsersModal: boolean,
  setOpenDailyUsersModal: Function
}

export default function DailyUsers({
  openDailyUsersModal,
  setOpenDailyUsersModal
}: DailyUserType) {
  return (
    <Modal
      open={openDailyUsersModal}
      onClose={() => setOpenDailyUsersModal(false)}
      sx={{
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <DailyUserCard />
    </Modal>
  )
}