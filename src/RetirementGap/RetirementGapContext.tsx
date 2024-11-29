import React, { createContext, useEffect, useState } from "react"

export interface RetirementGapContextType {
  monthlyIncomeGap: number,
  currModalCard: number,
  setCurrModalCard: Function
}

export const RetirementGapContext = createContext<RetirementGapContextType | null>(null)

const RetirementGapProvider = ({ children }: any) => {
  const monthlyIncomeGap = 564
  const [currModalCard, setCurrModalCard] = useState<number>(1)

  return (
    <RetirementGapContext.Provider value={{
      monthlyIncomeGap,
      currModalCard,
      setCurrModalCard
    }}>
      {children}
    </RetirementGapContext.Provider>
  )
}

export default RetirementGapProvider;