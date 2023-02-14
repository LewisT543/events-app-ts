import {GetServerSideProps} from "next";
import dynamic from "next/dynamic";
import {
  GenerateChartInput,
  generateChartProps,
  generateOhlcData,
  generateSingleValueData,
  getOhlcDataMockParams,
  getSingleValueDataMockParams
} from "../../src/lib/charts/utils/generateMockData";
import {PropsAnd} from "../../src/lib/charts/utils.types";
import {DashHomeProps} from "../../src/components/dashboard/DashHome";

const DashHome = dynamic(
  () => import("../../src/components/dashboard/DashHome").then((mod) => mod.DashHome), {
    ssr: false
  })

export const DashboardHomePage = (props: DashHomeProps): JSX.Element => {
  return <DashHome manyChartPanelProps={props.manyChartPanelProps}/>
}

export const getServerSideProps: GetServerSideProps = async (): Promise<PropsAnd<DashHomeProps>> => {
  // get data from server on page load

  const generateInputArr: GenerateChartInput[] = [
    {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
    {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
    {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
    {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
    {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
    {type: 'Line', mockParamsFn: getSingleValueDataMockParams, mockDataFn: generateSingleValueData},
    {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
    {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
    {type: 'Candlestick', mockParamsFn: getOhlcDataMockParams, mockDataFn: generateOhlcData},
  ]

  return {
    props: {
      title: 'Dashboard Homepage',
      manyChartPanelProps: {
        title: 'Many Chart Panel',
        chartProps: generateChartProps(generateInputArr),
        widthAndHeight: {width: 900, height: 600}
      }
    }
  }
}

export default DashboardHomePage
