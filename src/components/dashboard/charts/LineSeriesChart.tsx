import {MutableRefObject, useEffect, useRef} from "react";
import {
  ChartOptions,
  createChart,
  DeepPartial,
  IChartApi,
  ISeriesApi,
  LineData,
  WhitespaceData
} from "lightweight-charts";
import {setClassName} from "../../../utils/stringManip";

export interface LineSeriesChartProps {
  title?: string
  data: (LineData | WhitespaceData)[]
  className?: string
  classNameSuffix?: string
  options?: DeepPartial<ChartOptions>
}

export const LineSeriesChart = (props: LineSeriesChartProps) => {
  const {title, data, className, classNameSuffix, options} = props
  const chartRef = useRef() as MutableRefObject<HTMLDivElement>
  const chartName = setClassName('line-chart', className, classNameSuffix)

  // console.log(`LineSeriesChart data: ${JSON.stringify(data)}`)

  useEffect(() => {
    console.log(`LineSeriesChart otpions: ${JSON.stringify(options)}`)
    const chart: IChartApi = createChart(chartRef.current, options)
    const lineSeries: ISeriesApi<'Line'> = chart.addLineSeries()
    lineSeries.setData(data);
    chart.timeScale().fitContent()
    return () => {
      chart.remove()
    }
  }, [])

  return (
    <div className={`${chartName}-title`}>
      <h3>{title}</h3>
      <div className={`${chartName}-chart`} ref={chartRef}/>
    </div>
  )
}

