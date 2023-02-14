import GridLayout, {Layout} from "react-grid-layout"
import {
  getGridLayout,
  getLayoutTemplate,
  LayoutSizeTemplate,
  getWidthAndHeight
} from "../../../lib/charts/calculateLayout";
import {getClassName} from "../../../lib/charts/utils/stringManipulation";
import {makeCharts} from "../../../lib/charts/makeCharts";
import {ChartProps} from "../charts/TVChart";
import {WidthAndHeight} from "../dashboard.types";

export interface ManyChartPanelProps {
  title: string,
  chartProps: ChartProps[]
  className?: string
  widthAndHeight: WidthAndHeight
  classNameSuffix?: string,
}

export const ManyChartPanel = (props: ManyChartPanelProps) => {
  const {title, chartProps, className, widthAndHeight, classNameSuffix} = props
  const classNameWithSuffix = getClassName('multi-chart-panel', className, classNameSuffix)

  const {width, height} = widthAndHeight
  const gridLayout: Layout[] = getGridLayout(chartProps)
  const layoutSizes: LayoutSizeTemplate = getLayoutTemplate(chartProps.length, width, height)
  const eachChartSize: WidthAndHeight = getWidthAndHeight(layoutSizes)

  const allCharts = makeCharts(eachChartSize)(chartProps)

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