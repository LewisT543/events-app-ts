import {SingleChartWithFetchButton} from "./SingleChartWithFetchButton";
import {Example_Query} from "../../lib/alpha-v/apiHelper";
import {MultiChartWindow} from "./MultiChartWindow";

export const DashHome = ({data}: any) => {
  // children should be generated based on:
  // always display 8 - these can be empty or populated charts
  // if more than 8, paginate it.

  // or create a variableSized grid component (x: number, y: number)
  const children = [
    <SingleChartWithFetchButton
      text={'SINGLECHART ONE'}
      query={Example_Query}
      buttonText={'GetAvONE'}
    />,
    <SingleChartWithFetchButton
      text={'SINGLECHART TWO'}
      query={Example_Query}
      buttonText={'GetAvTWO'}
    />,
    <SingleChartWithFetchButton
      text={'SINGLECHART THREE'}
      query={Example_Query}
      buttonText={'GetAvTHREE'}
    />
  ]
  return (
    <div>
      <h1>DashBoard</h1>
      <div>
        <h2>Dash Charts</h2>
        <MultiChartWindow children={children}></MultiChartWindow>
      </div>
    </div>
  )
}