import {useState} from "react";
import {makeApiPOSTRequest} from "../../lib/alpha-v/apiHelper";
import {AVQuery} from "easy-alpha-v-ts/dist/types/alphavantage/queries/avQuery.types";

export interface AvFetchButtonProps {
  query: AVQuery
  buttonText: string
}

export const AvFetchButton = ({query, buttonText}: AvFetchButtonProps) => {
  const [avData, setAvData] = useState([])
  const fetchAvData = async () => {
    const response = await makeApiPOSTRequest('/api/alpha-vantage', query)
      .then((res: Response) => res.json())
    // store data in state
  }

  return (
    <button type={"button"} onClick={fetchAvData}>{buttonText}</button>
  )
}