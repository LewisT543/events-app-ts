import {ManyChartPanel, ManyChartPanelProps} from "./layouts/ManyChartPanel";

export interface DashHomeProps {
  title?: string
  manyChartPanelProps: ManyChartPanelProps
}

export const DashHome = (props: DashHomeProps) => {
  const {title, chartProps, widthAndHeight} = props.manyChartPanelProps
  const {width, height} = widthAndHeight

  return (
    <div className={'dashboard-container'} key={'panel-0'}>
      <ManyChartPanel className={'multi-chart-panel'} title={title ? title : 'Dashboard Home'}
                      chartProps={chartProps} widthAndHeight={{width, height}}/>
    </div>
  )
}