import {
  GenerateChartInput,
  generateChartProps,
  generateMockData,
  generateOhlcData,
  generateSingleValueData,
  getOhlcDataMockParams,
  getSingleValueDataMockParams,
  incrementTime
} from "../../src/lib/charts/utils/generateMockData";

const generateInputArr: GenerateChartInput[] = [
  {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
  {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
  {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
  {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
  {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
  {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
  {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
  {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
  {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
]

describe("generateMockData", () => {
  const genData = generateChartProps(generateInputArr)
  it("should convert data correctly (length)", () => {
    expect(genData.length).toBe(9)
  })
  it("should convert data correctly (data is defined)", () => {
    expect(genData.map(x => x.data !== undefined && x.type !== undefined))
  })
  it("should have converted line data to a line chart", () => {
    expect(genData[0].type === 'Line' && genData[0].data !== undefined)
  })
  it("should have converted candlestick data to a candlestick chart", () => {
    expect(genData[2].type === 'Candlestick' && genData[2].data !== undefined)
  })
})

describe("incrementTime", () => {
  const incrementedTime = incrementTime(new Date(1643205476), "Daily", 1)
  it("should increment the time by 86_400_000", () => {
    expect(incrementedTime).toBe(1643291876)
  })
})