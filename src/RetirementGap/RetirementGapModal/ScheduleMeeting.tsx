import ModalNavigation from "./ModalNavigation"

export default function ScheduleMeeting() {
  return (
    <>
      <div className="modalHeaderText">
        Ensure this option is right for you, schedule a time to meet on August 28, 2025:
      </div>
      <div className="modalSecondaryText">
        You indicated interest in the income solution below. 
      </div>
      <div className="schedulerTile">
        <div className="schedulerTileContent">
          <div className="schedulerTileHeader">
            $140k For $564/month With A 5% COLA
          </div>
          <div className="schedulerTileText">
            Even if you are not currently able to afford this option don’t stress, chat with a team-member and get our advice!
          </div>
        </div>
      </div>
      <ModalNavigation />
    </>
  )
}