import {AVQuery} from "easy-alpha-v-ts/dist/types/alphavantage/queries/avQuery.types";
import {AlphaVantageFundamentalsFnEnum, FundamentalsBalanceSheetQuery} from "easy-alpha-v-ts";

interface BasicAvRequest {
  headers: {
    'User-Agent': 'request',
    'Content-Type': 'application/json'
  },
  json: true,
}

export interface AvRequestGET extends BasicAvRequest {
  method: 'GET'
}

export interface AvRequestPOST extends BasicAvRequest {
  method: 'POST',
  body: string
}

export const makeApiPOSTRequest = async (url: string, query: AVQuery): Promise<Response> => {
  console.log(JSON.stringify(query))
  const postRequest: AvRequestPOST = {
    method: 'POST',
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json'
    },
    json: true,
    body: JSON.stringify(query)
  }
  return await fetch(url, postRequest)
}

export const makeGetReq = (customReq?: AvRequestGET) =>
  customReq !== undefined
    ? customReq
    : {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'application/json'
      },
      json: true,
    }

export const getApikeyFromEnv = () => process.env.ALPHA_VANTAGE_API_KEY ? process.env.ALPHA_VANTAGE_API_KEY : 'ERROR'
export const makeAvGetRequest = async (url: string, query: AVQuery, request?: AvRequestGET): Promise<Response> =>
  await fetch(url, makeGetReq(request !== undefined ? request : undefined))

export const Example_Query: FundamentalsBalanceSheetQuery = {
  fn: AlphaVantageFundamentalsFnEnum.BALANCE_SHEET,
  symbol: 'IBM',
  apiKey: 'demo'
}