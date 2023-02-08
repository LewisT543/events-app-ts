import {BarData, CandlestickData, HistogramData, LineData, SingleValueData, WhitespaceData} from "lightweight-charts";
import {ChartProps} from "./charts/TVChart";

export interface AreaChartProps extends ChartProps {
  data: CandlestickData[]
  type: 'Area'
}

export interface BarChartProps extends ChartProps {
  data: CandlestickData[]
  type: 'Bar'
}

export interface BaselineChartProps extends ChartProps {
  data: CandlestickData[]
  type: 'Baseline'
}

export interface CandlestickChartProps extends ChartProps {
  data: CandlestickData[]
  type: 'Candlestick'
}

export interface HistogramChartProps extends ChartProps {
  data: CandlestickData[]
  type: 'Histogram'
}

export interface LineSeriesChartProps extends ChartProps {
  data: (LineData | WhitespaceData)[]
  type: 'Line'
}

export interface WidthAndHeight {
  width: number
  height: number
}

export type ChartType = 'Area' | 'Bar' | 'Baseline' | 'Candlestick' | 'Histogram' | 'Line'
export type ChartDataType = SingleValueData | BarData | WhitespaceData | CandlestickData | HistogramData | LineData
export type ChartPropsType =
  AreaChartProps
  | BarChartProps
  | BaselineChartProps
  | CandlestickChartProps
  | HistogramChartProps
  | LineSeriesChartProps
export type MakeChartFn = (heightAndWidth: WidthAndHeight) => (details: ChartProps[]) => JSX.Element[]