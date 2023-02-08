import {LineData, UTCTimestamp} from "lightweight-charts";
import {now} from "next-auth/client/_utils";
import {getRandomElement} from "../utils.types";
import {ChartProps} from "../../../components/dashboard/charts/TVChart";
import {ChartDataType, ChartType} from "../../../components/dashboard/dashboard.types";

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

const getRandomArbitraryNumber = (range: MockDataRange): number => Number((Math.random() * (range.max - range.min) + range.min).toFixed(range.numDecimals))
const getRandomNumberWithRangeOrDefault = (range?: MockDataRange): number => range ? getRandomArbitraryNumber(range) : getRandomArbitraryNumber({
  min: 0,
  max: 100,
  numDecimals: 2
})

export const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

const mockIncrementArr: MockDataIncrement[] = ["Hourly", "Daily", "Weekly", "Monthly"]

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

interface GenerateLineDataParams {
  startDate: Date
  increment: MockDataIncrement
  numPoints: number
  dataRange?: MockDataRange
}

type GeneratedMockParams = GenerateLineDataParams

type GenerateMockDataFn = (params: GenerateLineDataParams) => LineData[]
type GenerateMockParamsFn = () => GeneratedMockParams

export const generateLineData = (params: GenerateLineDataParams): LineData[] => {
  const {startDate, increment, numPoints, dataRange} = params
  if (dataRange && dataRange.min > dataRange.max) throw new Error(`Error: generateLineData min:${dataRange.min} > max:${dataRange.max}`)
  return Array.from({length: numPoints}).map((x, index: number) => ({
    time: (startDate.getTime() + (getIncrementAsMilliseconds(increment) * index) / 1000) as UTCTimestamp,
    value: getRandomNumberWithRangeOrDefault(dataRange)
  }))
}

export const getLineDataMockParams = (): GenerateLineDataParams => ({
  startDate: new Date(now()),
  increment: getRandomElement(mockIncrementArr),
  numPoints: randomInt(20, 100),
  dataRange: {min: randomInt(10, 50), max: randomInt(51, 100), numDecimals: 2}
})

interface GenerateChartInput {
  mockDataFn: GenerateMockDataFn,
  type: ChartType,
  mockParamsFn: GenerateMockParamsFn
}

export const generateLineChartProps = (mockDataFn: GenerateMockDataFn, charts: number): ChartProps[] =>
  Array.from({length: charts}).map(x => ({
    type: 'Line' as ChartType,
    data: mockDataFn(getLineDataMockParams()),
  }))


export const generateChartProps = (genInputs: GenerateChartInput[]): ChartProps[] =>
  genInputs.map(input => ({
    type: input.type,
    data: input.mockDataFn(input.mockParamsFn()),
  }))


