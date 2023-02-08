import {ChartOptions, DeepPartial} from "lightweight-charts";

export const getClassName = (defaultClassName: string, customClassName?: string, classNameSuffix?: string): string => {
  if (customClassName !== undefined && classNameSuffix !== undefined) return customClassName + classNameSuffix
  if (customClassName !== undefined) return customClassName
  return defaultClassName
}

const hasHeightAndWidth = (opts?: DeepPartial<ChartOptions> | undefined): boolean => (opts?.height !== undefined) && (opts?.width !== undefined)
export const setChartOptions = (defaultOpts: DeepPartial<ChartOptions>, opts?: (DeepPartial<ChartOptions> | undefined)) => {
  return hasHeightAndWidth(opts) ? opts : defaultOpts
}

export const setChartSize = (chartWidth: number, chartHeight: number, opts?: DeepPartial<ChartOptions> | undefined): DeepPartial<ChartOptions> => ({
  ...opts, height: chartHeight, width: chartWidth
})