import {GetServerSideProps} from "next";
import dynamic from "next/dynamic";
import {generateLineChartDetails, generateLineData} from "../../src/lib/charts/utils/generateMockData";
import {now} from "next-auth/client/_utils";
import {PropsAnd} from "../../src/lib/charts/utils.types";
import {DashHomeProps} from "../../src/components/dashboard/DashHome";

const DashHome = dynamic(
  () => import("../../src/components/dashboard/DashHome").then((mod) => mod.DashHome), {
    ssr: false
  })

interface DashboardHomeProps {
  multiChartDetails: DashHomeProps
}

export const DashboardHome = (props: DashboardHomeProps): JSX.Element => {
  const {title, chartDetails, sizes} = props.multiChartDetails
  return <DashHome title={title} chartDetails={chartDetails} sizes={sizes}/>
}

export const getServerSideProps: GetServerSideProps = async (): Promise<PropsAnd<DashboardHomeProps>> => {
  // get data from server on page load
  return {
    props: {
      multiChartDetails: {
        chartDetails: generateLineChartDetails(generateLineData, 8),
        sizes: {
          "MultiChartPanelResponsive": {
            width: 1000, height: 600
          }
        }
      }
    }

  }
}

export default DashboardHome
