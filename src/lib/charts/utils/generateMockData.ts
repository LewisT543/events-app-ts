import {LineData, OhlcData, SingleValueData, UTCTimestamp} from "lightweight-charts";
import {now} from "next-auth/client/_utils";
import {getRandomElement} from "../utils.types";
import {ChartProps} from "../../../components/dashboard/charts/TVChart";
import {ChartDataType, ChartType} from "../../../components/dashboard/dashboard.types";
import {OhlcTestDataNoTimes, IOhlcTestDataNoTimes} from "../../constants";

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

interface GenerateDataParams {
  startDate: Date
  increment: MockDataIncrement
  numPoints?: number
  dataRange?: MockDataRange
}


type GenerateMockDataFn = SingleValueMockDataFn | OhlcMockDataFn
type SingleValueMockDataFn = (params: GenerateDataParams) => SingleValueData[]
type OhlcMockDataFn = (params: GenerateDataParams) => OhlcData[]
type GenerateMockParamsFn = () => GenerateDataParams

export const generateSingleValueData: GenerateMockDataFn = (params: GenerateDataParams): LineData[] => {
  const {startDate, increment, numPoints, dataRange} = params
  if (dataRange && dataRange.min > dataRange.max) throw new Error(`Error: generateLineData min:${dataRange.min} > max:${dataRange.max}`)
  return Array.from({length: numPoints ? numPoints : 12}).map((x, index: number) => ({
    time: (startDate.getTime() + (getIncrementAsMilliseconds(increment) * index) / 1000) as UTCTimestamp,
    value: getRandomNumberWithRangeOrDefault(dataRange)
  }))
}

export const generateOhlcData: GenerateMockDataFn = (params: GenerateDataParams): OhlcData[] =>
  OhlcTestDataNoTimes
    .map((value: IOhlcTestDataNoTimes, index): OhlcData => ({
      ...value, time: incrementTime(params.startDate, params.increment, index)
    }))

export const incrementTime = (startDate: Date, increment: MockDataIncrement, index: number): UTCTimestamp =>
  (startDate.getTime() + (getIncrementAsMilliseconds(increment) * index) / 1000) as UTCTimestamp

export const getSingleValueDataMockParams = (): GenerateDataParams => ({
  startDate: new Date(now()),
  increment: getRandomElement(mockIncrementArr),
  numPoints: randomInt(20, 100),
  dataRange: {min: randomInt(10, 50), max: randomInt(51, 100), numDecimals: 2}
})

export const getOhlcDataMockParams = (): GenerateDataParams => ({
  startDate: new Date(now()),
  increment: getRandomElement(mockIncrementArr),
})

export interface GenerateChartInput {
  type: ChartType,
  mockDataFn: GenerateMockDataFn,
  mockParamsFn: GenerateMockParamsFn
}

export const generateChartProps = (genInputs: GenerateChartInput[]): ChartProps[] =>
  genInputs.map(input => ({
    type: input.type,
    data: input.mockDataFn(input.mockParamsFn()),
  }))


