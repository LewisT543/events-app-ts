export interface SingleChartProps {
  text: string
}

export const SingleChart = ({text}: SingleChartProps) => {
  return <h3>{text}</h3>
}