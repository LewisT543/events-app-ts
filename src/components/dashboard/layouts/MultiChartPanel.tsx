import GridLayout from "react-grid-layout"

interface MultiChartPanelProps {
  title: string,
  children: JSX.Element[]
  className: string
  classNameSuffix?: string
}

export const MultiChartPanel = (props: MultiChartPanelProps) => {
  const {title, children, className, classNameSuffix} = props
  const classNameWithSuffix = classNameSuffix ? className + classNameSuffix : className

  const layout = [
    {i: "0", x: 0, y: 0, w: 1, h: 1},
    {i: "1", x: 1, y: 0, w: 1, h: 1},
    {i: "2", x: 0, y: 1, w: 1, h: 1},
    {i: "3", x: 1, y: 1, w: 1, h: 1}
  ]

  const displayChild = (child: JSX.Element, index: number): JSX.Element =>
    (<div key={`${index}`}>
      {child}
    </div>)

  return (
    <div className={classNameWithSuffix}>
      <div className={`${classNameWithSuffix}-title`}>
        <h2>{title}</h2>
      </div>
      <div className={`${classNameWithSuffix}-grid`}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={260}
          width={700} // total width
          isDraggable={false}
          isResizable={false}
        >
          {children.map((child: JSX.Element, index: number): JSX.Element =>
            (<div key={`${index}`} className={`${classNameWithSuffix}-chart`}>
              {child}
            </div>))}
        </GridLayout>
      </div>
    </div>
  )
}