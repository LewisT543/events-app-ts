import {SingleChart, SingleChartProps} from "./charts/SingleChart";
import {AvFetchButton, AvFetchButtonProps} from "../buttons/AvFetchButton";

export interface SingleChartWithFetchButtonProps extends SingleChartProps, AvFetchButtonProps {
}

export const SingleChartWithFetchButton = (props: SingleChartWithFetchButtonProps) => {
  return (
    <div>
      <SingleChart text={props.text}/>
      <AvFetchButton query={props.query} buttonText={props.buttonText}/>
    </div>
  )
}