import {LineSeriesChart, LineSeriesChartProps} from "./charts/LineSeriesChart";
import {AVQuery} from "easy-alpha-v-ts/dist/types/alphavantage/queries/avQuery.types";
import {makeApiPOSTRequest} from "../../lib/alpha-v/apiHelper";

export interface SingleChartWithFetchButtonProps extends LineSeriesChartProps {
  query: AVQuery
  buttonText: string
  data: any[]
}

export const SingleChartWithFetchButton = (props: SingleChartWithFetchButtonProps) => {
  const fetchAvData = async () => {
    const response = await makeApiPOSTRequest('/api/alpha-vantage', props.query)
      .then((res: Response) => res.json())
    // store data in state
  }
  return (
    <div>
      <LineSeriesChart text={props.text} data={props.data} height={400} width={600}/>
      <button type={"button"} onClick={fetchAvData}>{props.buttonText}</button>
    </div>
  )
}