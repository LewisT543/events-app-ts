import {LineData, UTCTimestamp} from "lightweight-charts";

type MockDataIncrement = 'Hourly' | 'Daily' | 'Weekly' | 'Monthly'


export const generateMockData = <T>() => {

  return [
    {time: '2019-04-11', value: 80.01},
    {time: '2019-04-12', value: 96.63},
  ]
}

interface MockDataRange {
  min: number
  max: number
  numDecimals?: number
}

const getRandomArbitrary = (range: MockDataRange): number => Number((Math.random() * (range.max - range.min) + range.min).toFixed(range.numDecimals))

const getRandomWithRangeOrDefault = (range?: MockDataRange): number => range ? getRandomArbitrary(range) : getRandomArbitrary({
  min: 0,
  max: 100,
  numDecimals: 2
})

const getIncrementAsMilliseconds = (increment: MockDataIncrement): number => {
  switch (increment) {
    case "Hourly":
      return 3_600_000
    case "Daily":
      return 86_400_000
    case "Weekly":
      return 604_800_000
    case "Monthly":
      return 2_629_800_000
  }
}

export const generateLineData = (startDate: Date, increment: MockDataIncrement, numPoints: number, dataRange?: MockDataRange): LineData[] => {
  if (dataRange && dataRange.min > dataRange.max) throw new Error(`Error: generateLineData min:${dataRange.min} > max:${dataRange.max}`)
  return Array.from({length: numPoints}).map((x, index: number) => ({
    time: (startDate.getTime() + (getIncrementAsMilliseconds(increment) * index) / 1000) as UTCTimestamp,
    value: getRandomWithRangeOrDefault(dataRange)
  }))
}

