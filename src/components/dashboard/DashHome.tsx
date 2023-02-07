import {MultiChartPanelResponsive} from "./layouts/MultiChartPanelResponsive";
import {ChartDetails} from "../../lib/charts/charts.types";
import {DashboardItemAndSize} from "../../lib/charts/utils.types";

export interface DashHomeProps {
  title?: string
  chartDetails: ChartDetails[]
  sizes: DashboardItemAndSize
}

export const DashHome = (props: DashHomeProps) => {
  const {title, chartDetails, sizes} = props
  const {width, height} = sizes.MultiChartPanelResponsive

  return (
    <div className={'dashboard-container'} key={'panel-0'}>
      <MultiChartPanelResponsive className={'multi-chart-panel'} title={title ? title : 'Dashboard Home'}
                                 chartDetails={chartDetails} widthAndHeight={{totalWidth: width, totalHeight: height}}/>
    </div>
  )
}