import {NextApiRequest, NextApiResponse} from "next";
import requestIp from 'request-ip'

type Data = {
  ip?: string;
}

const NextApi = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ip: requestIp.getClientIp(req)});
};

export default NextApi;