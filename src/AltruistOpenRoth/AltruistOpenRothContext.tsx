import { createContext, useState } from "react"

export interface AltruistOpenRothType {
  currModalCard: number,
  setCurrModalCard: Function
}

export const AltruistOpenRothContext = createContext<AltruistOpenRothType | null>(null)

const AltruistOpenRothProvider = ({ children }: any) => { 
  const [currModalCard, setCurrModalCard] = useState<number>(0)

  return (
    <AltruistOpenRothContext.Provider value={{
      currModalCard,
      setCurrModalCard
    }}>
      {children}
    </AltruistOpenRothContext.Provider>
  )
}

export default AltruistOpenRothProvider;