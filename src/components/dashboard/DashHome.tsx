import {DashboardItemAndSize} from "../../lib/charts/utils.types";
import {ManyChartPanel} from "./layouts/ManyChartPanel";
import {ChartProps} from "./charts/TVChart";

export interface DashHomeProps {
  title?: string
  chartDetails: ChartProps[]
  sizes: DashboardItemAndSize
}

export const DashHome = (props: DashHomeProps) => {
  const {title, chartDetails, sizes} = props
  const {width, height} = sizes.MultiChartPanelResponsive

  return (
    <div className={'dashboard-container'} key={'panel-0'}>
      <ManyChartPanel className={'multi-chart-panel'} title={title ? title : 'Dashboard Home'}
                      chartProps={chartDetails} widthAndHeight={{totalWidth: width, totalHeight: height}}/>
    </div>
  )
}