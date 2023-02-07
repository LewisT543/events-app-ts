import {
  BarData,
  CandlestickData, ChartOptions,
  DeepPartial,
  HistogramData,
  LineData,
  SingleValueData,
  WhitespaceData
} from "lightweight-charts";


export interface ChartDetails {
  type: ChartType
  title?: string
  data: ChartDataType[]
  options?: DeepPartial<ChartOptions>
  className?: string
  classNameSuffix?: string
}

export type ChartType = 'Area' | 'Bar' | 'Baseline' | 'Candlestick' | 'Histogram' | 'Line'
export type ChartDataType = BarData | WhitespaceData | CandlestickData | SingleValueData | LineData | HistogramData

