import {NextApiRequest} from "next";
import {AVQuery} from "easy-alpha-v-ts/dist/types/alphavantage/queries/avQuery.types";

export interface AlphaVNextApiRequest extends NextApiRequest {
  body: AVQuery
}