import {Layout} from "react-grid-layout";
import {ChartDetails} from "../../../types/charts.types";

export interface LayoutSizeTemplate {
  multiPanel: {
    numCols: number,
    numRows: number,
    gridWidth: number,
    gridHeight: number,
    rowHeight: number
  },
  graph: {
    width: number
    height: number
  }
}

interface XAndY {
  x: number
  y: number
}

export const calcGridLayout = (chartDetails: ChartDetails[]): Layout[] =>
  chartDetails.map((child: ChartDetails, index: number): Layout => {
    const {x, y} = setXandY(index)
    return {i: index.toString(), x, y, w: 1, h: 1}
  })

export const getLayoutTemplate = (numChildren: number, totalWidth: number, totalHeight: number): LayoutSizeTemplate => {
  const {cols, rows} = getColsAndRows(numChildren)
  const graphColWidth = totalWidth / cols
  const graphRowHeight = totalHeight / rows

  return {
    multiPanel: {
      numCols: cols,
      numRows: rows,
      gridWidth: totalWidth,
      gridHeight: totalHeight,
      rowHeight: graphRowHeight
    },
    graph: {
      width: graphColWidth - 15,
      height: graphRowHeight
    },
  }
}

const setXandY = (index: number): XAndY => {
  if (index < 12) { // First 0-11                            // 12-23
    const xValues = [0, 1, 0, 1, 2, 2, 0, 1, 2, 3, 3, 3] //, [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3]
    const yValues = [0, 0, 1, 1, 0, 1, 2, 2, 2, 0, 1, 2] //, [3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]
    return {x: xValues[index], y: yValues[index]}
  }
  return {x: index % 4, y: Math.floor(index / 4)}
}

const getNumCols = (numChildren: number): number => {
  if (numChildren <= 4) return 2
  if (numChildren <= 9) return 3
  return 4
}

const getNumRows = (numChildren: number) => {
  if (numChildren <= 2) return 1
  if (numChildren <= 6) return 2
  if (numChildren <= 12) return 3
  return Math.ceil(numChildren / 4)
}

const getColsAndRows = (numChildren: number) => ({cols: getNumCols(numChildren), rows: getNumRows(numChildren)})