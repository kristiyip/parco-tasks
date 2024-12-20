import moment from "moment"

export const getOneMonthAgoUnformatted = () => {
  const date = moment();
  return date.subtract(1, 'month')
}

export const getOneMonthAgoFormatted = () => {
  let oneMonthAgo = getOneMonthAgoUnformatted()
  let formattedDate = oneMonthAgo.format('ll')

  return formattedDate
}

export const getOneMonthAgoWithoutYear = () => {
  let d = getOneMonthAgoFormatted()
  const formattedDate = d.replace(/,\s*\d{4}/, '')

  return formattedDate
}

export const getStackedBarChartLabels = () => {
  const daysInAMonth = 31
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

export const getDailyUserData = (data: any) => {
  const map: any = {}
  const currDate = getOneMonthAgoUnformatted()
  const today = moment()

  while(currDate.isSameOrBefore(today)) {
    map[currDate.format('M-D-YY')] = 0
    currDate.add(1, 'day')
  }

  for(let userData of data) {
    for(let date of userData.dates) {
      if(date in map) {
        map[date]++
      }
    }
  }

  console.log(Object.values(map))

  return Object.values(map)
}