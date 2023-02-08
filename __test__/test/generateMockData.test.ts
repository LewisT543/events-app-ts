import {
  generateLineChartProps,
  generateLineData,
  generateMockData
} from "../../src/lib/charts/utils/generateMockData";
import {now} from "next-auth/client/_utils";


describe("generateMockData", () => {
  const genData = generateLineChartProps(generateLineData, 10)
  it("should convert lineData correctly (length)", () => {
    expect(genData.length).toBe(10)
  })
  it("should convert lineData correctly (data is defined)", () => {
    expect(genData.map(x => x.data !== undefined && x.type !== undefined))
  })
})