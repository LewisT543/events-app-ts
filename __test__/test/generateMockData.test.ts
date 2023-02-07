import {generateLineData, generateMockData} from "../../src/utils/generateMockData";
import {now} from "next-auth/client/_utils";


describe("generateMockData", () => {
  const genData = generateLineData(new Date(now()), 'Daily', 3)
  it("should convert lineData correctly (length)", () => {
    expect(genData.length).toBe(3)
  })
  it("should convert lineData correctly (data is defined)", () => {
    expect(genData.map(x => x.value !== undefined && x.time !== undefined))
  })
})