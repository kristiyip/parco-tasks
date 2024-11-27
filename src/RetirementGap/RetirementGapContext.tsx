import React, { createContext } from "react"

export interface RetirementGapContextType {
  monthlyIncomeGap: number
}

export const RetirementGapContext = createContext<RetirementGapContextType | null>(null)

const RetirementGapProvider = ({ children }: any) => {
  const monthlyIncomeGap = 564

  return (
    <RetirementGapContext.Provider value={{
      monthlyIncomeGap
    }}>
      {children}
    </RetirementGapContext.Provider>
  )
}

export default RetirementGapProvider;