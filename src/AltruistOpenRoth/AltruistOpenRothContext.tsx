import { createContext, useState } from "react"

export interface AltruistOpenRothType {
  currModalCard: number,
  setCurrModalCard: Function,
  modalOpen: boolean,
  setModalOpen: Function
}

export const AltruistOpenRothContext = createContext<AltruistOpenRothType | null>(null)

const AltruistOpenRothProvider = ({ children }: any) => { 
  const [currModalCard, setCurrModalCard] = useState<number>(0)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <AltruistOpenRothContext.Provider value={{
      currModalCard,
      setCurrModalCard,
      modalOpen,
      setModalOpen
    }}>
      {children}
    </AltruistOpenRothContext.Provider>
  )
}

export default AltruistOpenRothProvider;