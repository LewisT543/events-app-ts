import {setChartSize, getClassName} from "./utils/stringManipulation";
import {ChartProps, TVChart} from "../../components/dashboard/charts/TVChart";
import {ChartType, WidthAndHeight} from "../../components/dashboard/dashboard.types";
import {IChartApi, ISeriesApi} from "lightweight-charts";

export const addSeries = (chart: IChartApi, type: ChartType): ISeriesApi<ChartType> => {
  switch (type) {
    case "Area":
      return chart.addAreaSeries()
    case "Line":
      return chart.addLineSeries()
    case "Bar":
      return chart.addBarSeries()
    case "Candlestick":
      return chart.addCandlestickSeries()
    case "Baseline":
      return chart.addBaselineSeries()
    case "Histogram":
      return chart.addHistogramSeries()
  }
  throw new Error(`addSeries: type is undefined`)
}

export const makeSingleChart = (chartDetails: ChartProps, eachChartSize: WidthAndHeight, clsName: string, index: number) => {
  const props: ChartProps = {
    type: chartDetails.type,
    title: chartDetails?.title,
    data: chartDetails.data,
    options: setChartSize(eachChartSize.width, eachChartSize.height, chartDetails?.options),
    className: `${clsName}-${index}`
  }
  return <TVChart {...props} />
}

export const makeCharts = (eachChartSize: WidthAndHeight) => (details: ChartProps[]): JSX.Element[] =>
  details.map((chartDetails: ChartProps, index: number): JSX.Element => {
    const clsName = getClassName(`${chartDetails.type.toLowerCase()}-chart`, chartDetails?.className, chartDetails?.classNameSuffix)
    return (
      <div key={`${index}`} className={`${clsName}-chart`}>
        {makeSingleChart(chartDetails, eachChartSize, clsName, index)}
      </div>
    )
  })

