export interface NameAnd<T> {
  [name: string]: T
}

export interface PropsAnd<T> {
  props: T
}

interface WidthAndHeight {
  width: number
  height: number
}

export type DashboardComponentName = 'MultiChartPanelResponsive'

export type DashboardItemAndSize = {
  [name in DashboardComponentName]: WidthAndHeight
}

export const toArray = <T>(ts: T | T[] | undefined): T[] => {
  if (ts === undefined) return []
  if (Array.isArray(ts)) return ts
  return [ts]
}

export const getRandomElement = (arr: any[]) =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined