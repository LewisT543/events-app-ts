import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import dynamic from "next/dynamic";
import {ChartDetails} from "../../types/charts.types";
import {setClassName} from "../../src/utils/stringManip";
import {generateLineData} from "../../src/utils/generateMockData";
import {now} from "next-auth/client/_utils";
import {DashboardItemAndSize, PropsAnd} from "../../types/utils.types";

const MultiChartPanelResponsive = dynamic(
  () => import("../../src/components/dashboard/layouts/MultiChartPanelResponsive").then((mod) => mod.MultiChartPanelResponsive), {
    ssr: false
  })

interface DashboardHomeProps {
  title?: string
  charts: ChartDetails[]
  sizes: DashboardItemAndSize
}

export const DashboardHome: NextPage<DashboardHomeProps> = (props: DashboardHomeProps): JSX.Element => {
  const {title, charts, sizes} = props

  const {width, height} = sizes.MultiChartPanelResponsive

  // console.log(`DashboardHomeProps Data: ${JSON.stringify(props)}`)

  return (
    <div className={'dashboard-container'} key={'panel-0'}>
      <MultiChartPanelResponsive className={'multi-chart-panel'} title={title ? title : 'Dashboard Home'}
                                 chartDetails={charts} widthAndHeight={{totalWidth: width, totalHeight: height}}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<PropsAnd<DashboardHomeProps>> => {
  // get data from server on page load
  return {
    props: {
      title: 'Server Generated Dashboard Name',
      charts: [
        {type: 'Line', data: generateLineData(new Date(now()), 'Daily', 20, {min: 10, max: 23, numDecimals: 2})},
        {type: 'Line', data: generateLineData(new Date(now()), 'Weekly', 40, {min: 0, max: 230, numDecimals: 2})},
        {type: 'Line', data: generateLineData(new Date(now()), 'Monthly', 28, {min: 35, max: 139, numDecimals: 2})},
        {type: 'Line', data: generateLineData(new Date(now()), 'Daily', 105, {min: 10, max: 23, numDecimals: 2})}
      ],
      sizes: {
        "MultiChartPanelResponsive": {
          width: 500, height: 300
        }
      }
    }
  }
}

export default DashboardHome
