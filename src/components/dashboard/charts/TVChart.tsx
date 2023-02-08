import {MutableRefObject, useEffect, useRef} from "react";
import {getClassName} from "../../../lib/charts/utils/stringManipulation";
import {ChartOptions, createChart, DeepPartial, IChartApi, ISeriesApi} from "lightweight-charts";
import {ChartDataType, ChartType} from "../dashboard.types";
import {addSeries} from "../../../lib/charts/makeCharts";

export interface ChartProps {
  type: ChartType
  title?: string
  data: ChartDataType[]
  options?: DeepPartial<ChartOptions>
  className?: string
  classNameSuffix?: string
}

export const TVChart = (props: ChartProps): JSX.Element => {
  const {title, data, className, classNameSuffix, options, type}: ChartProps = props
  const chartRef = useRef() as MutableRefObject<HTMLDivElement>
  const chartName = getClassName(`${type.toLowerCase()}-chart`, className, classNameSuffix)

  useEffect(() => {
    const chart: IChartApi = createChart(chartRef.current, options)
    const typedChart: ISeriesApi<ChartType> = addSeries(chart, type)
    typedChart.setData(data);
    chart.timeScale().fitContent()
    return () => {
      chart.remove()
    }
  }, [data, options, type])

  return (
    <div className={`${chartName}-title`}>
      <h3>{title}</h3>
      <div className={`${chartName}-chart`} ref={chartRef}/>
    </div>
  )
}