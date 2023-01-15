import {NextApiResponse} from "next";
import {ApiErrorMessageEnum} from "../../types/api/apiError.types";
import {queryToUrl} from "easy-alpha-v-ts";
import {getApikeyFromEnv, makeAvGetRequest} from "../../src/lib/alpha-v/apiHelper";
import {AlphaVNextApiRequest} from "../../types/api/customRequests.types.ys";

export const handler = async (req: AlphaVNextApiRequest, res: NextApiResponse) => {

  const apikey = getApikeyFromEnv()
  if (apikey === 'ERROR') res.status(403).json({msg: ApiErrorMessageEnum.INVALID_API_KEY})

  switch (req.method) {
    case 'POST':
      const responseData = await makeAvGetRequest(queryToUrl(req.body), req.body).then((res: Response) => res.json())
      res.status(200).json(responseData)
      break

    default:
      res.status(200).json({msg: ApiErrorMessageEnum.END_OF_HANDLER_ERROR})
      break
  }
}

export default handler