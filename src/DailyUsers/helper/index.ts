import moment from "moment"

export const chartDataTransformer = (data: any) => {
  return {
    labels: ['A Month Ago', 'Today']
  }
}

export const getOneMonthAgoWithoutYear = () => {
  let d = moment()
  let oneMonthAgo = d.subtract(1, 'month')
  const formattedDate = oneMonthAgo.format('ll').replace(/,\s*\d{4}/, '')

  return formattedDate
}

export const getStackedBarChartLabels = () => {
  const daysInAMonth = 4
  let labels = Array(daysInAMonth).fill('').map((day, i) => {
    if(i == 0) {
      return getOneMonthAgoWithoutYear()
    } else if(i == daysInAMonth - 1) {
      return "Today"
    } else {
      return day
    }
  })
  return labels
}
