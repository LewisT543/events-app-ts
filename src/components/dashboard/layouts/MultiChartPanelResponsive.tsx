import GridLayout, {Layout} from "react-grid-layout"
import {calcGridLayout, getLayoutTemplate, LayoutSizeTemplate} from "../../../lib/charts/calculateLayout";
import {LineSeriesChart} from "../charts/LineSeriesChart";
import {ChartDetails} from "../../../lib/charts/charts.types";
import {setChartSize, setClassName} from "../../../lib/charts/utils/stringManipulation";

export interface MultiChartPanelResponsiveProps {
  title: string,
  chartDetails: ChartDetails[]
  className?: string
  widthAndHeight: { totalWidth: number, totalHeight: number }
  classNameSuffix?: string
}

export const MultiChartPanelResponsive = (props: MultiChartPanelResponsiveProps) => {
  const {title, chartDetails, className, widthAndHeight, classNameSuffix} = props
  const classNameWithSuffix = setClassName('multi-chart-panel', className, classNameSuffix)
  const {totalWidth, totalHeight} = widthAndHeight

  const gridLayout: Layout[] = calcGridLayout(chartDetails)
  const layoutSizes: LayoutSizeTemplate = getLayoutTemplate(chartDetails.length, totalWidth, totalHeight)

  const eachChartSize = {width: layoutSizes.graph.width, height: layoutSizes.graph.height}

  const makeLineCharts = (details: ChartDetails[]): JSX.Element[] =>
    details.map((chartDetail: ChartDetails, index: number) => {
      const clsName = setClassName(`line-series-chart`, chartDetail?.className, chartDetail?.classNameSuffix)
      return (
        <div key={`${index}`} className={`${clsName}-chart`}>
          <LineSeriesChart title={chartDetail?.title}
                           data={chartDetail.data}
                           options={setChartSize(eachChartSize.width, eachChartSize.height, chartDetail?.options)}
                           className={`${clsName}-${index}`}/>
        </div>
      )
    })

  console.log(`MultiChartPanelResponsive layoutTemp: ${JSON.stringify(layoutSizes)}`)

  const allCharts = makeLineCharts(chartDetails)

  console.log(`makeLineCharts produced: ${JSON.stringify(chartDetails)}`)

  return (
    <div className={classNameWithSuffix}>
      <div className={`${classNameWithSuffix}-title`}>
        <h2>{title}</h2>
      </div>
      <div className={`${classNameWithSuffix}-grid`}>
        <GridLayout
          className="layout"
          layout={gridLayout}
          cols={layoutSizes.multiPanel.numCols}
          rowHeight={layoutSizes.graph.height}
          width={layoutSizes.multiPanel.gridWidth}
          isDraggable={false}
          isResizable={false}
        >
          {allCharts}
        </GridLayout>
      </div>
    </div>
  )
}