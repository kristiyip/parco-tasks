import React, { createContext, useState } from "react"

export interface RetirementGapContextType {
  monthlyIncomeGap: number,
  currModalCard: number,
  setCurrModalCard: Function,
  nursingHomeConcernRating: number | null,
  setNursingHomeConcernRating: Function,
  inflationConcernRating: number | null,
  setInflationConcernRating: Function
}

export const RetirementGapContext = createContext<RetirementGapContextType | null>(null)

const RetirementGapProvider = ({ children }: any) => {
  const monthlyIncomeGap = 564
  const [currModalCard, setCurrModalCard] = useState<number>(1)
  const [nursingHomeConcernRating, setNursingHomeConcernRating] = useState<number | null>(null)
  const [inflationConcernRating, setInflationConcernRating] = useState<number | null>(null)
  return (
    <RetirementGapContext.Provider value={{
      monthlyIncomeGap,
      currModalCard,
      setCurrModalCard,
      nursingHomeConcernRating,
      setNursingHomeConcernRating,
      inflationConcernRating,
      setInflationConcernRating
    }}>
      {children}
    </RetirementGapContext.Provider>
  )
}

export default RetirementGapProvider;