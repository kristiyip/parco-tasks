type MonlthlyGapType = {
  monthlyIncomeGap: number
}

export default function MonthlyGap({
  monthlyIncomeGap
}: MonlthlyGapType) {

  return (
    <>
    <div className="gapText">My Retirement Gap:</div>
    <div className="amountHeader">
      <div className="dollarSign">$</div>
      <div className="amountNumber">{monthlyIncomeGap}</div>
      <div className="month">/month</div>
    </div>
  </>
  )
}