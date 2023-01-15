export interface MultiChartWindowProps {
  children: JSX.Element[]
}

export const MultiChartWindow = ({children}: MultiChartWindowProps) => {
  return (
    <div>
      {children.map((child: JSX.Element, index: number) => {
        return (
          <div className={`child-${index}`}>
            {child}
          </div>
        )
      })}
    </div>
  )
}