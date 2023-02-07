interface DashHomeProps {
  data: any[]
}

export const DashHome = (props: DashHomeProps) => {
  const {data} = props
  // chartDetails should be generated based on:
  // always display 8 - these can be empty or populated charts
  // if more than 8, paginate it.

  // or create a variableSized grid component (x: number, y: number)

  return (
    <div>
      <h1>DashBoard</h1>
      <div>
        <h2>Dash Charts</h2>
      </div>
    </div>
  )
}